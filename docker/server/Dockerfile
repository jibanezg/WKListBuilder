FROM node:8-alpine

RUN mkdir /wkarmybuilder

WORKDIR /wkarmybuilder

COPY ./package.json .

RUN npm install --global --ignore-scripts

COPY ./docker/server/entrypoint /

ENTRYPOINT ["/entrypoint"]
