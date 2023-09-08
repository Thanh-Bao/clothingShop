# To run backend

```
npm i -g @sap/cds-dk
```

```
npm i
```

```
npm start
```

# Cách lấy data JSON

### Lấy sản phẩm NewDevice

```
https://gps.bao.name.vn/rest/api/FilterProduct(category='NewDevice')

```

### Lấy sản phẩm GPSMoto 

```
https://gps.bao.name.vn/rest/api/FilterProduct(category='GPSMoto')

```

### Lấy tất cả sản phẩm

```
https://gps.bao.name.vn/rest/api/Product

```

### Lấy ra 1 sản phẩm cho trang "Product detail"

```
https://gps.bao.name.vn/rest/api/Product(ID='22',IsActiveEntity=true)

```

# to deploy 

```
docker compose build
```

```
version: '3'
services:
  gps_shop:
    image: thanhbao/gps_shop
    ports:
      - "4004:4004"

```




