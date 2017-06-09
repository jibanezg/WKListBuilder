FROM node:7

RUN mkdir /wkarmybuildertemp

RUN npm install -g @angular/cli

RUN npm install -g grunt

WORKDIR /wkarmybuildertemp

COPY ./package.json .

RUN npm install

RUN cd ./node_modules/materialize-css && npm install

WORKDIR /wkarmybuilder

COPY ./docker/server/entrypoint /

ENTRYPOINT ["/entrypoint"]
