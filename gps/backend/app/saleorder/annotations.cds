using APIService as service from '../../srv/Service';

annotate service.SaleOrder with @(
    UI.HeaderInfo     : {
        TypeName      : 'ID',
        TypeNamePlural: 'ID',
        Title         : {Value: ID},
    },

    UI.LineItem       : [
        {
            $Type: 'UI.DataField',
            Label: 'createdAt',
            Value: createdAt,
        },
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
            Label: 'address',
            Value: address,
        },
        {
            $Type: 'UI.DataField',
            Label: 'total',
            Value: total,
        },
        {
            $Type: 'UI.DataField',
            Label: 'status',
            Value: status,
        },
        {
            $Type: 'UI.DataField',
            Label: 'modifiedAt',
            Value: modifiedAt,
        },

    ],
    UI.SelectionFields: [
        createdAt,
        modifiedAt,
        total,
        name,
        phone,
        status,
        address,
    ]
);

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
                Label: 'Tên người nhận',
                Value: name,
            },
            {
                $Type: 'UI.DataField',
                Label: 'địa chỉ giao hàng',
                Value: address,
            },
            {
                $Type: 'UI.DataField',
                Label: 'status',
                Value: status,
            },
        ],
    },
    UI.FieldGroup #GeneratedGroup3: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'created at',
                Value: createdAt,
            },
            {
                $Type: 'UI.DataField',
                Label: 'modified at',
                Value: modifiedAt,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Tổng tiền (VNĐ)',
                Value: total,
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
            Label : 'Danh sách sản phẩm',
            Target: 'SaleOrderItems/@UI.LineItem',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet3',
            Label : 'Thông tin bổ sung',
            Target: '@UI.FieldGroup#GeneratedGroup3',
        },
    ]
);


annotate service.SaleOrderItem with @(UI.LineItem: [
    {
        $Type             : 'UI.DataField',
        Label             : 'product ID',
        Value             : productID,
        @HTML5.CssDefaults: {width: '40em'}
    },
    {
        $Type             : 'UI.DataField',
        Label             : 'quantity',
        Value             : quantity,
        @HTML5.CssDefaults: {width: '15em'}
    },
    {
        $Type             : 'UI.DataField',
        Label             : 'đơn giá (realPrice)',
        Value             : realPrice,
        @HTML5.CssDefaults: {width: '20em'}
    },
]);


annotate service.SaleOrderItem with {

    productID @(Common: {
        Text                    : Product.name,
        TextArrangement         : #TextLast,
        ValueListWithFixedValues: true,
        ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'Product',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: productID,
                    ValueListProperty: 'ID'
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'name'
                },
            ]
        },
    });
}

annotate service.SaleOrder with {
    status @(Common: {
        Text                    : OrderStatus.description,
        TextArrangement         : #TextLast,
        ValueListWithFixedValues: true,
        ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'OrderStatus',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: status,
                    ValueListProperty: 'status'
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'description'
                }
            ]
        },
    });
};
