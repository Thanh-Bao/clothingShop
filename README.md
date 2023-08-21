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

# to deploy 

```
docker compose build
```

```
docker compose up -d
```


``` rename
docker image tag a3dc9803833e813f2b9259d5ae52408931fed50cc12b008fb6f829020fee9a92  thanhbao/gps_shop:latest 
```

```
version: '3'
services:
  gps_shop:
    image: thanhbao/gps_shop
    ports:
      - "4004:4004"

```




