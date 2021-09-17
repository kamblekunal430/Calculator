# Build stage
FROM node:lts-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# Production stage
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
CMD ["nginx", "-g", "daemon off;"]
