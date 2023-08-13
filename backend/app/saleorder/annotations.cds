using APIService as service from '../../srv/Controller';

annotate service.SaleOrder with @(UI.LineItem: [
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
        Label: 'phone',
        Value: phone,
    },
    {
        $Type: 'UI.DataField',
        Label: 'note',
        Value: note,
    },
    {
        $Type: 'UI.DataField',
        Label: 'total',
        Value: total,
    },
]);

annotate service.SaleOrder with @(
    UI.FieldGroup #GeneratedGroup1: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'phone',
                Value: phone,
            },
             {
                $Type: 'UI.DataField',
                Label: 'name',
                Value: name,
            },
            {
                $Type: 'UI.DataField',
                Label: 'note',
                Value: note,
            },
            {
                $Type: 'UI.DataField',
                Label: 'address',
                Value: address,
            },
            {
                $Type: 'UI.DataField',
                Label: 'status',
                Value: status,
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
            Label : 'Sale Order detail',
            Target: 'SaleOrderItems/@UI.LineItem',
        },
    ]
);


annotate service.SaleOrderItem with @(UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Label: 'product ID',
        Value: productID,
    },
    {
        $Type: 'UI.DataField',
        Label: 'quantity',
        Value: quantity,
    },
    {
        $Type: 'UI.DataField',
        Label: 'price',
        Value: price,
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
]);
