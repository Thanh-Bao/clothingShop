using API as service from '../../srv/Service.cds';

annotate service.Product with @(
    UI.HeaderInfo     : {
        TypeName      : 'ID',
        TypeNamePlural: 'ID',
        Title         : {Value: ID},
    },
    UI.LineItem       : [
        {
            $Type             : 'UI.DataField',
            Label             : 'ID',
            Value             : ID,
            @HTML5.CssDefaults: {width: '10em'}
        },
        {
            $Type: 'UI.DataField',
            Label: 'name',
            Value: name,
        },
        {
            $Type             : 'UI.DataField',
            Label             : 'giá thật',
            Value             : realPrice,
            @HTML5.CssDefaults: {width: '10em'}
        },
        {
            $Type             : 'UI.DataField',
            Label             : 'giá ảo',
            Value             : fakePrice,
            @HTML5.CssDefaults: {width: '10em'}
        },
        {
            $Type             : 'UI.DataField',
            Label             : 'còn hàng?',
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
            Label: 'phân loại',
            Value: category,
        },
    ],

    UI.SelectionFields: [
        category,
        isActive,
        realPrice,
    ]
);

annotate service.Product with @(
    UI.FieldGroup #GeneratedGroup1    : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'Tên sản phẩm',
                Value: name,
            },
            {
                $Type: 'UI.DataField',
                Label: 'description',
                Value: description,
            },
            {
                $Type: 'UI.DataField',
                Label: 'category',
                Value: category,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Còn hàng?',
                Value: isActive,
            },
        ],
    },
    UI.FieldGroup #Pricing            : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'giá thật',
                Value: realPrice,
            },
            {
                $Type: 'UI.DataField',
                Label: 'giá ảo (giá discount phải lớn hơn giá thật)',
                Value: fakePrice,
            },
            {
                $Type: 'UI.DataField',
                Label: '% giảm giá',
                Value: discountPercent,
            },
        ]
    },
    UI.FieldGroup #GeneratedGroupImage: {
        $Type: 'UI.FieldGroupType',
        Data : [{
            $Type: 'UI.DataField',
            Label: 'link ảnh đại diện',
            Value: img,
        }, ]
    },
    UI.FieldGroup #GeneratedGroup3    : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'Ngày đăng',
                Value: createdAt,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Ngày chỉnh sửa',
                Value: modifiedAt,
            },
        ],
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
            ID    : 'GeneratedFacetPrice',
            Label : 'Nhập giá',
            Target: '@UI.FieldGroup#Pricing',
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
            Label : 'List ảnh mô tả (optinal)',
            Target: 'Album/@UI.LineItem',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet6',
            Label : 'Link youtube (optinal)',
            Target: 'Video/@UI.LineItem',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedGroup3',
            Label : 'Ngày tạo',
            Target: '@UI.FieldGroup#GeneratedGroup3',
        },
    ]
);

annotate service.Album with @(UI.LineItem: [
    {
        $Type             : 'UI.DataField',
        Label             : 'link ảnh',
        Value             : url,
        @HTML5.CssDefaults: {width: '40em'}
    },
    {
        $Type: 'UI.DataField',
        Label: 'Mô tả (optional)',
        Value: description,
    },
]);

annotate service.Video with @(UI.LineItem: [
    {
        $Type             : 'UI.DataField',
        Label             : 'link youtube',
        Value             : url,
        @HTML5.CssDefaults: {width: '40em'}
    },
    {
        $Type: 'UI.DataField',
        Label: 'Mô tả (optional)',
        Value: description,
    },
]);

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
