using APIService as service from '../../srv/Controller';

annotate service.Color with @(
    UI.SelectionFields: [],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'color',
            Value : color,
        },
        {
            $Type : 'UI.DataField',
            Value : hexColorCode,
        },
        {
            $Type : 'UI.DataField',
            Label : 'description',
            Value : description,
        },
    ]
);
annotate service.Color with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'color',
                Value : color,
            },
            {
                $Type : 'UI.DataField',
                Label : 'hexColorCode',
                Value : hexColorCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'description',
                Value : description,
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
