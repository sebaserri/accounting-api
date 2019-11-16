FROM node:10.17.0-alpine
ENV NODE_ENV develop
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --develop --silent && mv node_modules ../
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ]
