FROM node:lts

USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm
ENV PATH=$NPM_CONFIG_PREFIX/bin:$PATH

RUN npm i -g @sap/cds-dk