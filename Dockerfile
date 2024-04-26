FROM node:18-alpine

WORKDIR /app

COPY backend/package*.json ./

RUN npm install

COPY backend/ .

ENV PORT=3000

EXPOSE $PORT

CMD ["npm", "start"]
