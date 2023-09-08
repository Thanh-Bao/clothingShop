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

#  To config reverse proxy

```
htpasswd -c /etc/nginx/.htpasswd myUsername123
```

/etc/nginx/sites-enabled/dedault

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;
       
        location /sap/ {
          limit_except POST PUT PATCH DELETE {
             auth_basic     "Admin";
             auth_basic_user_file /etc/nginx/.htpasswd;
          }
          proxy_pass http://127.0.0.1:4004/;
        }

        location /odata/v4/api/SaleOder {
          limit_except GET  PUT PATCH  {
             auth_basic       "Admin";
             auth_basic_user_file /etc/nginx/.htpasswd;
           }
           proxy_pass http://127.0.0.1:4004/odata/v4/api/SaleOrder;
        }

        location /odata/ {
          proxy_pass http://127.0.0.1:4004/odata/;
        }

        location /rest/ {
          proxy_pass http://127.0.0.1:4004/rest/;
        }

        location / {
          proxy_pass http://127.0.0.1:3000;
        }
}
```




