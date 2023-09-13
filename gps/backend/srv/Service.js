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
        const { name, phone, address, SaleOrderItems } = req.data;
        // fetch(
        //     `https://discord.com/api/webhooks/1143749926489178133/R2JNL2cp7Es4XKf_3I1U20Qhm-t81GWWJMoLV6QSKaFJEl6QNNKfW3m9hzSaBL18mVuw`
        //     , {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             "content": `SĐT: ${phone} - Tên: ${name} - Địa chỉ: ${address} vừa mua hàng. ${SaleOrderItems.map(item => item.ProductID)}`
        //         })
        //     }).then(r => console.log("@@@", r))
        //     .catch(err => req.error("ERROR"))
        //     ;
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
            await UPDATE(SaleOrder).with({ total: totalMoney }).where({ ID : result.ID });
        } catch (error) {
            req.error(400, `Lỗi khi cập nhật giá sản phẩm ${error.toString()}`)
        }
    })
}
