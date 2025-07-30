# Build stage
FROM node:22.12.0 AS builder
WORKDIR /app
COPY ./vue-app /app
RUN yarn add vite \
    && yarn build \
    && cp /app/src/assets/* /app/dist/assets/

FROM nginx:1.25.1-alpine AS runtime
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]