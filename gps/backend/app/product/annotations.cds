using APIService as service from '../../srv/Service.cds';

annotate service.Product with @(
    UI.HeaderInfo     : {
        TypeName      : 'ID',
        TypeNamePlural: 'ID',
        Title         : {Value: ID},
    },
    UI.LineItem       : [
        {
            $Type: 'UI.DataField',
            Label: 'ID',
            Value: ID,
        },
        {
            $Type: 'UI.DataField',
            Label: 'name',
            Value: name,
        },
        {
            $Type             : 'UI.DataField',
            Label             : 'price',
            Value             : price,
            @HTML5.CssDefaults: {width: '10em'}
        },
        {
            $Type             : 'UI.DataField',
            Label             : 'isActive',
            Value             : isActive,
            Criticality       : {$edmJson: {$If: [
                {$Eq: [
                    {$Path: 'isActive'},
                    false
                ]},
                1,
                {$If: [
                    {$Eq: [
                        {$Path: 'isActive'},
                        true
                    ]},
                    3,
                    2
                ]}
            ]}},
            @HTML5.CssDefaults: {width: '10em'}
        },
        {
            $Type: 'UI.DataField',
            Label: 'category',
            Value: category,
        },
    ],

    UI.SelectionFields: [
        category,
        isActive,
        price,
    ]
);

annotate service.Product with @(
    UI.FieldGroup #GeneratedGroup1    : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'name',
                Value: name,
            },
            {
                $Type: 'UI.DataField',
                Label: 'price',
                Value: price,
            },
            {
                $Type: 'UI.DataField',
                Label: 'short description',
                Value: shortDesc,
            },
            {
                $Type: 'UI.DataField',
                Label: 'full description (HTML format)',
                Value: longDesc,
            },
            {
                $Type: 'UI.DataField',
                Label: 'category',
                Value: category,
            },
            {
                $Type: 'UI.DataField',
                Label: 'isActive',
                Value: isActive,
            },
        ],
    },
    UI.FieldGroup #GeneratedGroupImage: {
        $Type: 'UI.FieldGroupType',
        Data : [{
            $Type: 'UI.DataField',
            Label: 'thumbnail URL',
            Value: thumbnailURL,
        }, ]
    },
    UI.Facets                         : [
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet1',
            Label : 'General Information',
            Target: '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet4',
            Label : 'Image',
            Target: '@UI.FieldGroup#GeneratedGroupImage',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet5',
            Label : 'Album',
            Target: 'Album/@UI.LineItem',
        },
    ]
);

annotate service.Album with @(UI.LineItem: [{
    $Type: 'UI.DataField',
    Label: 'absoluteURL',
    Value: absoluteURL,
}, ]);

//********************/ value help *******************

annotate service.Product with {
    category @(Common: {
        Text                    : Category.name,
        TextArrangement         : #TextLast,
        ValueListWithFixedValues: true,
        ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'Category',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: category,
                    ValueListProperty: 'ID'
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'name'
                }
            ]
        },
    });
};
