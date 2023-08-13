# To run backend

```
cd backend
```

```
npm i
```

```
npm i -g @sap/cds-dk
```

```
npm start
```


### install VSCode extension (Optional)

https://marketplace.visualstudio.com/items?itemName=SAPSE.vscode-cds


# Detail Design


![alt text](https://github.com/Thanh-Bao/clothingShop/blob/main/docs/1.png?raw=true)

![alt text](https://github.com/Thanh-Bao/clothingShop/blob/main/docs/2.png?raw=true)

![alt text](https://github.com/Thanh-Bao/clothingShop/blob/main/docs/4.png?raw=true)

![alt text](https://github.com/Thanh-Bao/clothingShop/blob/main/docs/5.png?raw=true)

![alt text](https://github.com/Thanh-Bao/clothingShop/blob/main/docs/3.png?raw=true)

# Run Chrome without cors

https://alfilatov.com/posts/run-chrome-without-cors/

# Quy tắc viết query String

https://viblo.asia/p/query-trong-web-api-odata-ZDEeLRxzvJb

https://www.odata.org/getting-started/basic-tutorial/#queryData

# query string sample

## 1. Trang chủ
### Lấy tất cả sản phẩm (SELECT * FROM)

http://localhost:4004/api/Product

### Filter sản theo điều kiện (SELECT with WHERE)

#### Lấy ra sản phẩm có giá lớn hơn 500000đ

http://localhost:4004/api/Product?$filter=price gt 500000

### Tìm kiếm sản phẩm (SELECT with WHERE LIKE, IN)

http://localhost:4004/api/Product?$search=hiệu quả

### Các điều kiện bên trên kết hợp với phân trang (SQL LIMIT)

http://localhost:4004/api/Product?$expand=Sizes&$top=1

hoặc

http://localhost:4004/api/Product?$expand=Sizes&$skip=1&$top=1

### Các điều kiện bên trên kết hợp với sắp xếp (SQL ORDER BY)

http://localhost:4004/api/Product?$expand=Sizes&$top=1&$orderby=price desc

### Kết hợp nhiều entity (SQL JOIN)

http://localhost:4004/api/Product?$expand=Sizes,Album

### nested $filter nhiều điều kiện kết hợp $expand

http://localhost:4004/api/Product?$filter=contains(name,'Áo sơ mi') and price gt 300000 and price lt 500000&$expand=Sizes($filter=size eq 'XL')

## 2. Product detail

### Lấy ra một sản phẩm khi biết ID 

http://localhost:4004/api/Product(ID='ao-so-mi-nam-dai-tay-cafe-dris-khu-mui',IsActiveEntity=false)

## 3 . Create new Order

**POST** : http://localhost:4004/odata/v4/api/SaleOrder
**body**

```
{
        "phone"          : "0934565431",
        "note"           : null,
        "total"          : 560000,
        "address"        : "Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh.",
        "userID"         : null,
        "SaleOrderItems" : [
             {
               "productID"    : "quan-short-nam-thun-co-dan",
                "quantity"     : 2,
                "price"        : 400000,
                "color"        : "RED",
                "size"         : "XL" 
            },
            {
               "productID"    : "quan-short-nam-thun-co-dan",
                "quantity"     : 2,
                "price"        : 400000,
                "color"        : "RED",
                "size"         : "XL" 
            }
        ]
}
```

_______________________________________________________________________________


![alt text](https://github.com/Thanh-Bao/clothingShop/blob/main/docs/6.jpg?raw=true)


# to deploy 

```
docker compose build
```

```
docker compose up -d
```





