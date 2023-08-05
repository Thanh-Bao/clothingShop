using {db} from '../db/Repository';

service APIService {

    @odata.draft.enabled
    entity SaleOrder     as projection on db.SaleOrder;

    @odata.draft.enabled
    entity Product       as projection on db.Product;

    @odata.draft.enabled
    entity Category      as projection on db.Category;

    @odata.draft.enabled
    entity Size          as projection on db.Size;

    @odata.draft.enabled
    entity Color         as projection on db.Color;
    @odata.draft.enabled
    entity Material      as projection on db.Material;
    entity SaleOrderItem as projection on db.SaleOrderItem;
    entity Image         as projection on db.Image;
    entity Album         as projection on db.Album;
    entity User          as projection on db.User;
    entity ProductSize   as projection on db.ProductSize;
    entity ProductColor  as projection on db.ProductColor;
}
