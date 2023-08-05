sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'color/test/integration/FirstJourney',
		'color/test/integration/pages/ColorList',
		'color/test/integration/pages/ColorObjectPage'
    ],
    function(JourneyRunner, opaJourney, ColorList, ColorObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('color') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheColorList: ColorList,
					onTheColorObjectPage: ColorObjectPage
                }
            },
            opaJourney.run
        );
    }
);