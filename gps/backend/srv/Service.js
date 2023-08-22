module.exports = srv => {

    const { SaleOrder, Product } = srv.entities;

    srv.after('READ', Product, async res => {
        console.log(999);
    });

    srv.on('FilterProduct', async req => {

        return "AAA";
    })

    // srv.on('NEW', SaleOrder, async req => {
    //     console.log(req)
    //     console.log("0944aa");
    // })
    srv.before('READ', SaleOrder, async req => {
        // console.log(req)
        console.log("0944aa");
    })

}
