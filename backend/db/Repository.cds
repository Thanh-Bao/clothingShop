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
    key SaleOrder : Association to one SaleOrder;
    key Product   : Association to one Product;
        quantity  : Integer;
        price     : Integer;
        color     : String;
        size      : String;
}

// ******************* master data ************************************************************

entity Product : common {
    key ID        : String; // format: quan-short-nam-thun-co-dan, chan-vay-jean
        name      : String;
        price     : Integer;
        material  : Material;
        shortDesc : String;
        longDesc  : String;
        quantity : Integer;
        category  : Association to one Category;
        Image     : Composition of one Image;
        Colors     : Composition of many ProductColor on Colors.productID = $self.ID;
        Sizes     : Composition of many ProductSize
                        on Sizes.productID = $self.ID;
        Album     : Composition of many Album
                        on Album.productID = $self.ID;
}

entity ProductSize {
    key ID        : UUID;
        productID : String;
        size      : String;
}

entity ProductColor  {
    key ID : UUID;
    productID: String;
    color: String;
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
        productID   : String;
        absoluteURL : String;
        html_alt    : String; // for SEO
}

entity User : common {
    key ID        : UUID;
        phone     : String;
        name      : String;
        note      : String;
        password  : String;
        SaleOrder : Association to many SaleOrder;
// Address
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
