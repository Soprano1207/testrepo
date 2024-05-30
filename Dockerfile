# Используем базовый образ Node.js
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app/mynodeproject

# Копируем package.json и package-lock.json в рабочую директорию
COPY mynodeproject/package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем оставшиеся файлы проекта в рабочую директорию
COPY mynodeproject/ .

# Указываем команду по умолчанию для выполнения тестов
CMD ["npm", "test"]
