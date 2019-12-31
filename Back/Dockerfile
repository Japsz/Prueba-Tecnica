# build environment
FROM node:10.16.3-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
COPY . /app
CMD ["/bin/sh", "-c", "npm start;"]

