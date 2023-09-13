
@open
type object : array of {};

using {
   sap.common.CodeList
} from '@sap/cds/common';

    

@protocol: ['rest','odata-v4']
service API {
    @odata.draft.enabled
    entity SaleOrder : common {
        key ID             : UUID;
            phone          : String(10)  @mandatory  @assert.format: '^0\d{9}$';
            total          : Decimal(7)  @readonly;
            address        : String(70)  @mandatory;
            name           : String(100);
            status         : String(15)  @mandatory  @assert.range  enum { PROCESSING; SUCCESS; CANCEL;RETURN } default 'PROCESSING';
            SaleOrderItems : Composition of many SaleOrderItem on SaleOrderItems.saleOrderID = $self.ID;
            OrderStatus    : Association to one OrderStatus  on OrderStatus.status = $self.status;
    }
    entity SaleOrderItem {
        key ID          : UUID;
            saleOrderID : UUID;
            productID   : Integer;
            quantity    : Decimal(2)                          @mandatory default 1;
            realPrice   : Decimal(8)                          @readonly;
            fakePrice   : Decimal(8)                          @readonly;
            SaleOrder   : Association to one SaleOrder;
            Product     : Association to one Product on Product.ID = $self.productID @readonly;
    }

    entity OrderStatus {
        key status      : String;
            description : String;

    }

    @odata.draft.enabled
    entity Product : common {
        key ID          : Integer     @mandatory  @title: 'Nhập ID sản phẩm';
            name        : String(60)  @mandatory;
            realPrice   : Decimal(8)  @mandatory;
            fakePrice   : Decimal(8);
            description : String;
            guarantee   : Association to Guarantee;
            category    : String default 'NewDevice';
            isActive    : Boolean     @mandatory default true;
            img         : String      @mandatory;
            Category    : Association to one Category  on Category.ID = $self.category;
            Album       : Composition of many Album on Album.productID = $self.ID;
            Video       : Composition of many Video  on Video.productID = $self.ID;
            Offer       : Composition of many Specialoffer on Offer.productID = $self.ID;
            textdescription        : Composition of many Text  on textdescription.productID = $self.ID;
    }


    entity Category {
        key ID   : String(20) @mandatory;
            name : String(20) @mandatory;
    }


    entity Album {
        key ID          : UUID;
            productID   : Integer    @mandatory;
            url         : String     @mandatory;
            description : String;
    }

    entity Video {
        key ID          : UUID;
        key productID   : Integer    @mandatory;
            url         : String     @mandatory;
            description : String;
    }

    entity Guarantee : CodeList {
        key code : String enum {
        sixMounth  = '6 tháng';
        oneyears = '1 năm (12 tháng)';
        twoyears = '2 năm (24 tháng)';
        } default '1 năm (12 tháng)';
    }

    entity Specialoffer {
        key ID          : UUID;
            productID   : Integer;
            des         : String;
    }

     entity Text {
        key ID          : UUID;
            productID   : Integer;
            txt         : String;
    }

    aspect common : {
        createdAt  : Timestamp  @cds.on.insert: $now;
        modifiedAt : Timestamp  @cds.on.insert: $now  @cds.on.update: $now;
    }

    function FilterProduct(category : String) returns object;

    action posvnWebHook(data : object);


}
