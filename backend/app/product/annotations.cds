using APIService as service from '../../srv/Controller';

annotate service.Product with @(
    UI.LineItem       : [
        {
            $Type: 'UI.DataField',
            Label: 'ID',
            Value: ID,
        },
        {
            $Type: 'UI.DataField',
            Label: 'createdAt',
            Value: createdAt,
        },
        {
            $Type: 'UI.DataField',
            Label: 'modifiedAt',
            Value: modifiedAt,
        },
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
            Label: 'isActive',
            Value: isActive,
        },
    ],

    UI.SelectionFields: [category, isActive]
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
                Label: 'shortDesc',
                Value: shortDesc,
            },
            {
                $Type: 'UI.DataField',
                Label: 'longDesc',
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
            Label : 'Size',
            Target: 'Sizes/@UI.LineItem',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet3',
            Label : 'Color',
            Target: 'Colors/@UI.LineItem',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet4',
            Label : 'Image',
            Target: 'Image/@UI.FieldGroup#GeneratedGroup2',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet5',
            Label : 'Album',
            Target: 'Album/@UI.LineItem',
        },
    ]
);

annotate service.Image with @(UI.FieldGroup #GeneratedGroup2: {
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
});

annotate service.ProductColor with @(UI.LineItem: [{
    $Type: 'UI.DataField',
    Label: 'color',
    Value: color,
}, ]);


annotate service.ProductSize with @(UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Label: 'size                                              ',
        Value: size,
    },
]);

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
};
