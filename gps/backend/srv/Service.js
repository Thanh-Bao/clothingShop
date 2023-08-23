const fetch = require('node-fetch');

module.exports = srv => {

    const { SaleOrder, Product } = srv.entities;

    srv.on('FilterProduct', async req => {
        try {
            const { category } = req.data;
            return await SELECT.from(Product).where({ category });
        } catch (error) {
            req.error(error.toString());
        }
    })

    srv.after('READ', Product, async res => {
        console.log(999);
    });

    // NEW == POST (SaleOrder.drafts, syntax since 7.1.2 july 2023) 
    srv.before('CREATE', SaleOrder, async req => {
        console.log(req)
        const { name, phone, address, SaleOrderItems} = req.data;
        console.log("@@@@123",req.data)
        fetch(
            `https://discord.com/api/webhooks/1143749926489178133/R2JNL2cp7Es4XKf_3I1U20Qhm-t81GWWJMoLV6QSKaFJEl6QNNKfW3m9hzSaBL18mVuw`
            , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "content": `SĐT: ${phone} - Tên: ${name} - Địa chỉ: ${address} vừa mua : ${SaleOrderItems.map(item=> item.ProductID)}`
                })
            }).then(r => console.log("@@@", r))
            .catch(err => req.error("ERROR"))
            ;

    })

}
