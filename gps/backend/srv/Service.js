const fetch = require('node-fetch');


module.exports = srv => {
    const { SaleOrder, Product, SaleOrderItem } = srv.entities;

    srv.on('FilterProduct', async req => {
        try {
            const { category } = req.data;
            return await SELECT.from(Product).where({ category });
        } catch (error) {
            req.error(error.toString());
        }
    });

    srv.on('posvnWebHook', async req => {
        console.log("WEBHOOK --->", req.data);
    })


    srv.after('READ', SaleOrder, async result => {
        //console.log("MMMMMMMMMMMMMMMMMM===>", await SELECT.from())
    });

    // NEW == POST (SaleOrder.drafts, syntax since 7.1.2 july 2023) 
    srv.before('CREATE', SaleOrder, async req => {
        try {
            const { name, phone, address, SaleOrderItems } = req.data;
            const { name: productName1 } = await SELECT.one.from(Product).where({ ID: SaleOrderItems[0].productID });
            const totalLineItem = SaleOrderItems.length;
            let productName2 = null;
            if (totalLineItem >= 2) {
                const product = await SELECT.one.from(Product).where({ ID: SaleOrderItems[1].productID });
                productName2 = product.name;
            }
            fetch(
                `https://discord.com/api/webhooks/1143749926489178133/R2JNL2cp7Es4XKf_3I1U20Qhm-t81GWWJMoLV6QSKaFJEl6QNNKfW3m9hzSaBL18mVuw`
                , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "content": `SĐT: ${phone} - Tên: ${name} - Địa chỉ: ${address} vừa mua ${SaleOrderItems[0].quantity} ${productName1} ${productName2 ? ` và ${SaleOrderItems[1].quantity} ${productName2}` : ''} ${totalLineItem > 2 ? ` cùng ${totalLineItem - 2} sản phẩm khác!` : ''}`
                    })
                }).then()
                .catch(console.log);
            //////////////////////
            fetch(
                `https://discord.com/api/webhooks/1151483339958661191/zRldwKj-bl9AboNyspAQjvB41g-aoBLOQLfv6nqeOJON5bbGB_C6L36xKttI7CqH7QB9`
                , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "content": `Cần tư vấn ngayyyyyyyyyy`
                    })
                }).then()
                .catch(console.log)
                ;
        } catch (error) {
            console.log(error)
        }
    });

    srv.after('CREATE', SaleOrder, async (result, req) => {
        try {
            let totalMoney = null;
            for (let index = 0; index < result?.SaleOrderItems?.length; index++) {
                const { productID, saleOrderID, quantity } = result.SaleOrderItems[index];
                const { realPrice } = await SELECT.one.from(Product).where({ ID: productID })
                await UPDATE(SaleOrderItem).with({ realPrice }).where({ productID, and: { saleOrderID } });
                totalMoney += realPrice * quantity;
            };
            await UPDATE(SaleOrder).with({ total: totalMoney }).where({ ID: result.ID });
        } catch (error) {
            req.error(400, `Lỗi khi cập nhật giá sản phẩm ${error.toString()}`)
        }
    })
}
