sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'size/test/integration/FirstJourney',
		'size/test/integration/pages/SizeList',
		'size/test/integration/pages/SizeObjectPage'
    ],
    function(JourneyRunner, opaJourney, SizeList, SizeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('size') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSizeList: SizeList,
					onTheSizeObjectPage: SizeObjectPage
                }
            },
            opaJourney.run
        );
    }
);