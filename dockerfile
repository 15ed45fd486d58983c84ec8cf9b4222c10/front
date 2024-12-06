# Используем официальную Node.js образ
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock в контейнер
COPY package*.json ./
COPY yarn.lock ./

# Запускаем Yarn для установки зависимостей
RUN yarn install

# Копируем оставшиеся файлы проекта в контейнер
COPY . .

# Выполняем build с помощью Yarn
RUN yarn build

FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
