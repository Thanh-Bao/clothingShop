using {db} from '../db/Entity';

service APIService {

    @odata.draft.enabled
    entity Product       as projection on db.Product;
    entity Album         as projection on db.Album;
    entity Video         as projection on db.Video;
    entity Category      as projection on db.Category;
    @odata.draft.enabled
    entity SaleOrder     as projection on db.SaleOrder;
    entity SaleOrderItem as projection on db.SaleOrderItem;
}
