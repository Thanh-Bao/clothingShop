sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'saleorder/test/integration/FirstJourney',
		'saleorder/test/integration/pages/SaleOrderList',
		'saleorder/test/integration/pages/SaleOrderObjectPage'
    ],
    function(JourneyRunner, opaJourney, SaleOrderList, SaleOrderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('saleorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSaleOrderList: SaleOrderList,
					onTheSaleOrderObjectPage: SaleOrderObjectPage
                }
            },
            opaJourney.run
        );
    }
);