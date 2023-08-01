using APIService as service from '../../srv/Controller';

annotate service.Product with @(UI.LineItem: [
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
]);

annotate service.Product with @(
    UI.FieldGroup #GeneratedGroup1: {
        $Type: 'UI.FieldGroupType',
        Data : [
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
                Label: 'ID',
                Value: ID,
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
                Label: 'material',
                Value: material,
            },
            {
                $Type: 'UI.DataField',
                Label: 'color',
                Value: color,
            },
            {
                $Type: 'UI.DataField',
                Label: 'size',
                Value: size,
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
                Label: 'category_ID',
                Value: category_ID,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Image_product_ID',
                Value: Image_product_ID,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Album_product_ID',
                Value: Album_product_ID,
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
            Label : 'Images',
            Target: 'Image/@UI.FieldGroup#GeneratedGroup2',
        },
    ]
);

annotate service.Image with @(
    UI.FieldGroup #GeneratedGroup2: {
        $Type: 'UI.FieldGroupType',
        Data : [
           
            {
                $Type: 'UI.DataField',
                Label: 'hover Image URL',
                Value: hoverImageURL,
            },
            {
                $Type: 'UI.DataField',
                Label: 'hover Image HTML alt',
                Value: hoverImage_alt,
            },
            {
                $Type: 'UI.DataField',
                Label: 'thumbnail URL',
                Value: thumbnailURL,
            },
        ]
    }
);
