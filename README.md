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




![alt text](https://github.com/Thanh-Bao/clothingShop/blob/main/docs/6.png?raw=true)





