FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npx prisma generate

CMD node index_front.js

EXPOSE 28785
