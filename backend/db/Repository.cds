namespace db;

// ****************** transaction data *******************************************************

entity SaleOrder : common {
    key ID             : UUID;
        phone          : String;
        note           : String;
        total          : Integer;
        address        : String;
        status         : OrderStatus default 'PROCESSING';
        SaleOrderItems : Composition of many SaleOrderItem;
        User           : Association to User;
}

entity SaleOrderItem {
    key SaleOrderID : UUID;
    key product     : Association to one Product;
        quantity    : Integer;
        price       : Integer;
        color       : Color;
        size        : Size;
}

// ******************* master data ************************************************************

entity Product : common {
    key ID        : String; // format: quan-short-nam-thun-co-dan, chan-vay-jean
        name      : String;
        price     : Integer;
        material  : Material;
        color     : Color;
        size      : Size;
        shortDesc : String;
        longDesc  : String;
        category  : Composition of one Category;
        Image     : Composition of one Image;
        Album     : Composition of many Album;
}

entity Category {
    key ID          : String;
        name        : String;
        description : String;
        products    : Composition of many Product;
}


entity Image {
    key ID             : UUID;
    key product        : Association to one Product;
        thumbnailURL   : String;
        thumbnail_alt  : String; // for SEO
        hoverImageURL  : String;
        hoverImage_alt : String; // for SEO
}

entity Album { // product detail page
    key ID          : UUID;
    key product     : Association to one Product;
        absoluteURL : String;
        html_alt    : String; // for SEO

}

entity User : common {
    key phone : String;
        name  : String;
        note  : String;
// Address
// Password
}

//******************************* other stuff *****************************************************

aspect common : {
    createdAt  : Timestamp  @cds.on.insert: $now;
    modifiedAt : Timestamp  @cds.on.insert: $now  @cds.on.update: $now;
}

type OrderStatus : String enum {
    PROCESSING = 'PROCESSING';
    SUCCESS    = 'SUCCESS';
    CANCEL     = 'CANCEL';
    RETURN     = 'RETURN';
}

type Material    : String enum {
    JEAN       = 'JEAN';
    COTON      = 'COTON';
}

type Color       : String enum {
    BLACK      = 'BLACK';
    BLUE       = 'BLUE';
    GREEN      = 'GREEN';
    ORANGE     = 'ORANGE';
    VIOLET     = 'VIOLET';
    WHITE      = 'WHITE';
}


type Size        : String enum {
    XXXL       = 'XXXL';
    XXL        = 'XXL';
    XL         = 'XL';
    L          = 'L';
    M          = 'M';
};
