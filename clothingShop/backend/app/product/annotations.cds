using APIService as service from '../../srv/Controller';

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
            Label: 'material',
            Value: material,
        },
        {
            $Type: 'UI.DataField',
            Label: 'category',
            Value: category,
        },
        {
            $Type: 'UI.DataField',
            Label: 'quantity',
            Value: quantity,
        },
    ],

    UI.SelectionFields: [
        category,
        isActive,
        material,
        price,
        
    ]
);

annotate service.Product with @(
    UI.FieldGroup #GeneratedGroup1: {
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
                Label: 'material',
                Value: material,
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
          Data : [
        {
            $Type: 'UI.DataField',
            Label: 'thumbnail URL',
            Value: thumbnailURL,
        },
        {
            $Type: 'UI.DataField',
            Label: 'thumbnail HTML alt',
            Value: thumbnail_alt,
        },
        {
            $Type: 'UI.DataField',
            Label: 'hover Image URL',
            Value: hoverImageURL,
        },
        {
            $Type: 'UI.DataField',
            Label: 'hover Image alt',
            Value: hoverImage_alt,
        },
    ]
    },
    UI.Facets                     : [
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet1',
            Label : 'General Information',
            Target: '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet2',
            Label : 'Sizes',
            Target: 'Sizes/@UI.LineItem',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet3',
            Label : 'Colors',
            Target: 'Colors/@UI.LineItem',
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

annotate service.ProductColor with @(UI.LineItem: [{
    $Type             : 'UI.DataField',
    Label             : 'color',
    Value             : color,
    @HTML5.CssDefaults: {width: '15em'}
}, ]);


annotate service.ProductSize with @(UI.LineItem: [{
    $Type             : 'UI.DataField',
    Label             : 'size                                              ',
    Value             : size,
    @HTML5.CssDefaults: {width: '15em'}
}, ]);

annotate service.ProductSize with {
    size @(Common: {
        ValueListWithFixedValues: true,
        ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'Size',
            Parameters    : [{
                $Type            : 'Common.ValueListParameterInOut',
                LocalDataProperty: size,
                ValueListProperty: 'size'
            }, ]
        },
    });
};

annotate service.ProductColor with {
    color @(Common: {
        ValueListWithFixedValues: true,
        ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'Color',
            Parameters    : [{
                $Type            : 'Common.ValueListParameterInOut',
                LocalDataProperty: color,
                ValueListProperty: 'color'
            },

            ]
        }
    });
};


annotate service.Album with @(UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Label: 'absoluteURL',
        Value: absoluteURL,
    },
    {
        $Type: 'UI.DataField',
        Label: 'HTML alt',
        Value: html_alt,
    },
]);

//********************/ value help *******************

annotate service.Product with {
    category @(Common: {
        Text                    : Category.description,
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

    material @(Common: {
        ValueListWithFixedValues: true,
        ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'Material',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: material,
                    ValueListProperty: 'material'
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'description'
                }
            ]
        },
    });
};
