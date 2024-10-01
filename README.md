# About This Project

I'm teaching myself MERN stack and building a fake coffee website. Bits and pieces of knowledge have been pulled together from various learning outlets--O'Reilly, YouTube, Medium, etc.

The project is divided into two main sections: `server` contains the Express/NodeJS backend along with definitions for MongoDB. `app` contains the React frontend. The `docker-compose.yml` file is used to stand up a local MongoDB instance. 

## Planned features

- Authenticated API
- Customer account management
- Shopping cart (fake purchases)
- Admin page for inventory/account management
- Product reviews
- (Fake) story locations presented on a map
- The ability to run the whole thing from Docker

## Getting Started

Please ensure that [NodeJS](https://nodejs.org/en) and [Docker Desktop](https://www.docker.com/products/docker-desktop/) are installed.

### Run MongoDB

Change to the root of the project and run `docker compose up`.

### Run The NodeJS Backend

Edit the values in `./server/.env.example`. Then rename the file to `.env`.

Then run the following:

`cd ./server
npm install
npm run dev`

This will launch NodeJS on the port specified in the .env file.

### Run the React Frontend

From the root folder, run the following:

`cd ./app
npm install
npm run dev`

The website should now be accessible from http://localhost:3000.

## API

All endpoints are available at http://localhost:5001/api.

### Endpoints

- GET `/products` - Get all products
- GET `/products/<id>` - Get one product by its product ID
- POST `/products/add` - Add a new product
- PATCH `/products/update/<id>` - Update one product by its product ID
- DELETE `/products/delete/<id>` - Delete one product by its product ID
