using {db} from '../db/Entity';

service APIService {
    @odata.draft.enabled
    entity Product     as projection on db.Product;

    entity Category    as projection on db.Category;
    entity OrderStatus as projection on db.OrderStatus;

    @odata.draft.enabled
    entity SaleOrder   as projection on db.SaleOrder;

    function FilterProduct(category : String) returns String;
}
