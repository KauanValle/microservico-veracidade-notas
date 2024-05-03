FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install && npm install express body-parser && npm install dotenv

COPY . .

EXPOSE 3000

CMD npm start