FROM node:7

RUN mkdir /wkarmybuildertemp

RUN npm install -g @angular/cli

COPY ./package.json /wkarmybuildertemp

RUN cd /wkarmybuildertemp && npm install

COPY ./docker/server/entrypoint /

ENTRYPOINT ["/entrypoint"]
