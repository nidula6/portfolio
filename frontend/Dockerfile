### Multi-stage Dockerfile for building the Vite React app and serving with nginx
### Stage 1: build
FROM node:20-alpine AS build

WORKDIR /app

# Copy package manifests first (for better cache) and install dependencies
COPY package.json package-lock.json* ./

RUN npm ci --prefer-offline --no-audit --progress=false

# Copy the rest of the project and build
COPY . .
RUN npm run build

### Stage 2: serve with nginx
FROM nginx:stable-alpine

# Remove default config and copy our own
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
