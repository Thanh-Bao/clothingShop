using APIService as service from '../../srv/Controller';

annotate service.Material with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'material',
            Value : material,
        },
        {
            $Type : 'UI.DataField',
            Label : 'description',
            Value : description,
        },
    ]
);
annotate service.Material with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'material',
                Value : material,
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
