# Dockerfile
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./mynodeproject

RUN npm install

# Bundle app source
COPY . .

# Run tests
CMD ["npm", "test"]
