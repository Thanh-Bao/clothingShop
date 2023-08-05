namespace db;

// ****************** transaction data *******************************************************

entity SaleOrder : common {
    key ID             : UUID;
        phone          : String(10)  @mandatory; 
        note           : String;
        total          : Decimal(7)  @mandatory;
        address        : String(70);
        status         : String(15)  @mandatory @assert.range enum { PROCESSING; SUCCESS; CANCEL; RETURN } default 'PROCESSING';
        SaleOrderItems : Composition of many SaleOrderItem;
        User           : Association to User;
}

entity SaleOrderItem {
    key SaleOrder : Association to one SaleOrder;
    key Product   : Association to one Product;
        quantity  : Decimal(2) @mandatory;
        price     : Decimal(6) @mandatory;
        color     : String(10);
        size      : String(4);
}

// ******************* master data ************************************************************

entity Product : common {
    key ID        : String(40)   @mandatory @title: 'ID đặt theo format quan-short-nam-thun-co-dan, chan-vay-jean';
        name      : String(60)   @mandatory;
        price     : Decimal(6)   @mandatory;
        material  : String(10)   @mandatory @assert.range enum { JEAN; COTON; };
        shortDesc : String(200)  @mandatory;
        longDesc  : String;
        quantity  : Decimal(4);
        category  : String;
        isActive  : Boolean      @mandatory default true;
        Category  : Association to one Category      on Category.ID = $self.category;
        Image     : Composition of one Image;
        Colors    : Composition of many ProductColor on Colors.productID = $self.ID;
        Sizes     : Composition of many ProductSize  on Sizes.productID = $self.ID;
        Album     : Composition of many Album        on Album.productID = $self.ID;
}

entity ProductSize {
    key ID        : UUID;
        productID : String(40) @mandatory;
        size      : String(4)  @mandatory;
        Size      : Association to one Size on Size.size = $self.size;
}

entity Size {
    key size   : String(4)   @mandatory  @assert.range enum { S; XS; M; L; XL; XXL; XXXL; XXXXL; };
        height : Decimal(3)  @mandatory  @title: 'Chiều cao';
        weight : Decimal(3)  @mandatory  @title: 'Cân nặng';
        bust   : Decimal(3)  @mandatory  @title: 'Vòng ngực';
        waist  : Decimal(3)  @mandatory  @title: 'Vòng eo';
        hip    : Decimal(3)  @mandatory  @title: 'Vòng 3';
}

entity ProductColor {
    key ID        : UUID;
        productID : String(40) @mandatory;
        color     : String(10) @mandatory @assert.range enum { RED; BLUE; WHITE; BLACK; GREEN; ORANGE; };
}

entity Category {
    key ID          : String(20) @mandatory;
        name        : String(20) @mandatory;
        description : String;
}


entity Image {
    key ID             : UUID;
    key product        : Association to one Product;
        thumbnailURL   : String @mandatory;
        thumbnail_alt  : String;            // for SEO
        hoverImageURL  : String @mandatory;
        hoverImage_alt : String;            // for SEO
}

entity Album {                              // product detail page
    key ID          : UUID;
        productID   : String(40) @mandatory;
        absoluteURL : String     @mandatory;
        html_alt    : String;               // for SEO
}

entity User : common {
    key ID        : UUID;
        phone     : String(10) @mandatory;
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

