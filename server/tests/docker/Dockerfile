FROM node:alpine
WORKDIR /usr/aws-cloud-apps/integration

COPY ./package.json ./

RUN npm install

COPY ./ ./

## WAIT mod
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
