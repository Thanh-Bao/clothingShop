namespace db;


entity SaleOrder : common {
    key ID             : UUID;
        phone          : String(10)  @mandatory  @assert.format: '^0\d{9}$';
        total          : Decimal(7)  @readonly;
        address        : String(70)  @mandatory;
        name           : String(100);
        status         : String(15)  @mandatory  @assert.range  enum {
            PROCESSING;
            SUCCESS;
            CANCEL;
            RETURN
        } default 'PROCESSING';
        SaleOrderItems : Composition of many SaleOrderItem
                             on SaleOrderItems.saleOrderID = $self.ID;
}

entity SaleOrderItem {
    key ID          : UUID;
        saleOrderID : UUID;
        productID   : String(99);
        quantity    : Decimal(2) @mandatory default 1;
        realPrice   : Decimal(8) @readonly;
        fakePrice   : Decimal(8) @readonly;
        SaleOrder   : Association to one SaleOrder;
        Product     : Association to one Product
                          on Product.ID = $self.productID;
}


entity Product : common {
    key ID                      : String(99)  @mandatory  @title: 'Nhập ID sản phẩm';
        name                    : String(60)  @mandatory;
        realPrice               : Decimal(8)  @mandatory;
        fakePrice               : Decimal(8);
        description             : String;
        category                : String default 'NewDevice';
        isActive                : Boolean     @mandatory default true;
        img                     : String      @mandatory;
        Category                : Association to one Category
                                      on Category.ID = $self.category;
        Album                   : Composition of many Album
                                      on Album.productID = $self.ID;
        Video                   : Composition of many Video
                                      on Video.productID = $self.ID;
}


entity Category {
    key ID   : String(20) @mandatory;
        name : String(20) @mandatory;
}


entity Album {
    key ID          : UUID;
        productID   : String(99) @mandatory;
        url         : String     @mandatory;
        description : String;
}

entity Video {
    key ID          : UUID;
        productID   : String(99) @mandatory;
        url         : String     @mandatory;
        description : String;
}


aspect common : {
    createdAt  : Timestamp  @cds.on.insert: $now;
    modifiedAt : Timestamp  @cds.on.insert: $now  @cds.on.update: $now;
}
