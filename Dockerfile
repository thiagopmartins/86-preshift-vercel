FROM node:14.15.4-alpine3.12

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn cache clean && yarn --update-checksums
COPY . ./
EXPOSE 3000 3001
CMD ["yarn", "dev:mockup"]