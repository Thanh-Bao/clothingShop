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

    srv.before('NEW', SaleOrder, async req => {
        console.log("0944aa#####");
    })

}
