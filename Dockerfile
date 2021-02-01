FROM node:10.23-alpine as builder

WORKDIR /app

COPY package.json package.json

RUN yarn install

COPY . .

RUN yarn build


### ===== NGINX =========
FROM nginx:1.18.0-alpine

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

