FROM node:16 as base

WORKDIR /Camagru
COPY package.json .

FROM base as dev
RUN npm install --development
RUN npm run compile
COPY . .
CMD ["node", "./dist/bin/www"]

FROM base as prod
RUN npm install --production
RUN npm run compile
COPY . .
CMD ["node", "./dist/bin/www"]