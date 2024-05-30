# Используем базовый образ Node.js
FROM node:latest

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта в рабочую директорию
COPY . .

# Команда, которая будет выполнена при запуске контейнера
CMD ["node", "test/matrix.test.js"]