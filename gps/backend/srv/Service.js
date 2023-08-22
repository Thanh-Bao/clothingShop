module.exports = srv => {

    const { SaleOrder, Product } = srv.entities;

    srv.on('FilterProduct', async req => {
        return {
            "a" : 1
        };
    })

    srv.after('READ', Product, async res => {
        console.log(999);
    });

    // NEW == POST (SaleOrder.drafts, syntax since 7.1.2 july 2023) 
    srv.before('NEW', SaleOrder.drafts, async req => {
        console.log("0944aa#####");
    })

}
