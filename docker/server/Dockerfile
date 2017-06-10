FROM node:7

RUN mkdir /wkarmybuildertemp

RUN npm install -g @angular/cli

RUN npm install -g grunt

WORKDIR /wkarmybuildertemp

COPY ./package.json .

RUN npm install

RUN cd ./node_modules/materialize-css && npm install

RUN cd ../../

COPY ./node_modules/materialize-css/bin/materialize.css ./src/css/

COPY ./node_modules/materialize-css/bin/materialize.js ./src/js/

COPY ./node_modules/materialize-css/dist/fonts/ ./src/fonts/

WORKDIR /wkarmybuilder

COPY ./docker/server/entrypoint /

ENTRYPOINT ["/entrypoint"]
