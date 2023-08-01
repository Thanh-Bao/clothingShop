namespace db;

// ****************** transaction data *******************************************************

entity SaleOrder : common {
    key ID                : UUID;
        phone  @mandatory : String(10);
        note              : String;
        total  @mandatory : Decimal(7);
        address           : String(70);
        status @mandatory : OrderStatus default 'PROCESSING';
        SaleOrderItems    : Composition of many SaleOrderItem;
        User              : Association to User;
}

entity SaleOrderItem {
    key SaleOrder           : Association to one SaleOrder;
    key Product             : Association to one Product;
        quantity @mandatory : Decimal(2);
        price    @mandatory : Decimal(6);
        color               : String(10);
        size                : String(4);
}

// ******************* master data ************************************************************

entity Product : common {
    key ID                   : String(40); // format: quan-short-nam-thun-co-dan, chan-vay-jean
        name      @mandatory : String(60);
        price     @mandatory : Decimal(6);
        material  @mandatory : Material(20);
        shortDesc @mandatory : String(200);
        longDesc             : String;
        quantity             : Decimal(4);
        category             : String;
        Category             : Association to one Category
                                   on Category.ID = $self.category;
        Image                : Composition of one Image;
        Colors               : Composition of many ProductColor
                                   on Colors.productID = $self.ID;
        Sizes                : Composition of many ProductSize
                                   on Sizes.productID = $self.ID;
        Album                : Composition of many Album
                                   on Album.productID = $self.ID;
}

entity ProductSize {
    key ID                   : UUID;
        productID @mandatory : String(40);
        size      @mandatory : String(4);
}

entity Size {
    key size   : String(4);
        height : Decimal(3);
        weight : Decimal(3);
        bust   : Decimal(3);
        waist  : Decimal(3);
        hip    : Decimal(3);
}

entity ProductColor {
    key ID                   : UUID;
        productID @mandatory : String(40);
        color     @mandatory : String(10);
}

entity Category {
    key ID   @mandatory : String(20);
        name @mandatory : String(20);
        description     : String;
}


entity Image {
    key ID                       : UUID;
    key product                  : Association to one Product;
        thumbnailURL  @mandatory : String;
        thumbnail_alt            : String; // for SEO
        hoverImageURL @mandatory : String;
        hoverImage_alt           : String; // for SEO
}

entity Album { // product detail page
    key ID                     : UUID;
        productID   @mandatory : String(40);
        absoluteURL @mandatory : String;
        html_alt               : String; // for SEO
}

entity User : common {
    key ID        : UUID;
        phone     : String(10);
        name      : String(20);
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
