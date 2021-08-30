FROM node:16-alpine3.11

RUN mkdir /token-king/

WORKDIR /token-king/

COPY . .

RUN yarn install
RUN yarn generate
