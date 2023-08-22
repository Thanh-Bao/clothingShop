module.exports = srv => {

    const { SaleOrder, Product, Color } = srv.entities;

    // srv.after('READ', Product, async res => {
    //    console.log(999);
    // });

    srv.after("NEW", Product, req => {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    })

}
