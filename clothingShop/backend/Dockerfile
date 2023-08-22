FROM node

WORKDIR /usr/home/app


# Install entire needed library
RUN npm i -g @sap/cds-dk

COPY package.json .
COPY package-lock.json .
RUN npm install


# Copy all important files to image
COPY app app
COPY db db
COPY srv srv

# 
COPY db.sqlite .
EXPOSE 4004

CMD [ "npm", "start" ];

