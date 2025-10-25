# Multi-stage build für optimale Performance
FROM node:18-alpine AS builder

# Arbeitsverzeichnis setzen
WORKDIR /app

# Package files kopieren
COPY package*.json ./

# Dependencies installieren (ALLE, inkl. devDependencies für den Build)
RUN npm ci

# Source code kopieren
COPY . .

# Build der Anwendung
RUN npm run build

# Production stage
FROM nginx:alpine

# Build-Artefakte kopieren
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx Konfiguration kopieren
COPY nginx.conf /etc/nginx/nginx.conf

# Port freigeben
EXPOSE 80

# Nginx starten
CMD ["nginx", "-g", "daemon off;"]
