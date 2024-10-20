### Build Node backend into Docker image

# https://rainerregan.medium.com/how-to-dockerize-a-typescript-node-js-app-250f8bd1d181
# https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defa
# https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker

FROM node:22.10.0-alpine3.20 as base
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5001
CMD ["npm", "start"]