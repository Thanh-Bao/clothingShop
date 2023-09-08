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




