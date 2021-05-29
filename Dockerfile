FROM node:14
ENV DEBUG True

EXPOSE $STORK_FE_PORT

WORKDIR /app

COPY ./package* ./

RUN npm install

COPY . ./

CMD npm start