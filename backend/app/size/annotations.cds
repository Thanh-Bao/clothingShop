using APIService as service from '../../srv/Controller';

annotate service.Size with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'size',
            Value : size,
        },
        {
            $Type : 'UI.DataField',
            Value : height,
        },
        {
            $Type : 'UI.DataField',
            Value : weight,
        },
        {
            $Type : 'UI.DataField',
            Value : bust,
        },
        {
            $Type : 'UI.DataField',
            Value : waist,
        },
    ]
);
annotate service.Size with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'size',
                Value : size,
            },
            {
                $Type : 'UI.DataField',
                Value : height,
            },
            {
                $Type : 'UI.DataField',
                Value : weight,
            },
            {
                $Type : 'UI.DataField',
                Value : bust,
            },
            {
                $Type : 'UI.DataField',
                Value : waist,
            },
            {
                $Type : 'UI.DataField',
                Value : hip,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
