FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV REACT_APP_BACKEND_URL=https://minion-url.herokuapp.com/

RUN npm run build --production

RUN npm install -g serve

# $PORT is automatically supplied by Heroku
CMD serve -p $PORT -s build
