# FROM node:16 AS build-stage

# # WORKDIR /frontend
# COPY /frontend .
# RUN npm install
# RUN npm run build



FROM node:16

ENV NPM_CONFIG_LOGLEVEL=error
ENV NODE_ENV=production
ENV NODE_MODULES_CACHE=true
ENV NODE_VERBOSE=false
ENV PORT=8001
EXPOSE 8001

WORKDIR /var/www
COPY . .
RUN npm install --production

WORKDIR /var/www/frontend
RUN npm install
RUN npm run build
RUN rm -rf node_modules
WORKDIR /var/www

CMD ["npm", "start"]