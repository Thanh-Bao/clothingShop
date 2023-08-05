sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'material/test/integration/FirstJourney',
		'material/test/integration/pages/MaterialList',
		'material/test/integration/pages/MaterialObjectPage'
    ],
    function(JourneyRunner, opaJourney, MaterialList, MaterialObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('material') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMaterialList: MaterialList,
					onTheMaterialObjectPage: MaterialObjectPage
                }
            },
            opaJourney.run
        );
    }
);