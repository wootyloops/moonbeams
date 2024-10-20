### Build react into Docker image

# https://rainerregan.medium.com/how-to-dockerize-a-typescript-node-js-app-250f8bd1d181
# https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defa

FROM node:22.10.0-alpine3.20 as base
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm i -g serve
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "dist"]