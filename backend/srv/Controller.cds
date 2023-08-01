using {db} from '../db/Repository';

service APIService {

    @odata.draft.enabled
    entity SaleOrder     as projection on db.SaleOrder;

    entity SaleOrderItem as projection on db.SaleOrderItem;

    @odata.draft.enabled
    entity Product       as projection on db.Product;
    @odata.draft.enabled
    entity Category      as projection on db.Category;
    entity Image         as projection on db.Image;
    entity Album         as projection on db.Album;
    entity User          as projection on db.User;
    entity ProductSize   as projection on db.ProductSize;
    entity ProductColor  as projection on db.ProductColor;
}
