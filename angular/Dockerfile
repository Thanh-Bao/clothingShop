# FROM nginx

# COPY dist/my-brand /usr/share/nginx/html

FROM node:19 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY --from=builder /app/dist/my-brand /usr/share/nginx/html
