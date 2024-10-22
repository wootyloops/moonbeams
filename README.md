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

## Getting Started

Please ensure that [NodeJS](https://nodejs.org/en) and [Docker Desktop](https://www.docker.com/products/docker-desktop/) are installed.

### Run MongoDB

From the project root, run:

```bash
cd ./mongo
docker compose up
```

### Run The NodeJS Backend

Edit the values in `./server/.env.example`. Then rename the file to `.dev.env`.

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

## Running from Docker

I've gotten this to run in docker now.

Make sure you have specified the correct './server/.env.prod' file before continuing. The DB_URL variable must specify the name of the mongo container.

From project root:

```bash
docker build -t moonbeans/frontend ./app
docker build -t moonbeans/backend ./server
docker compose up
```

## API

All endpoints are available at http://localhost:5001/api.

### Endpoints

- GET `/products` - Get all products
- GET `/products/<id>` - Get one product by its product ID
- POST `/products` - Add a new product
- PATCH `/products/<id>` - Update one product by its product ID
- DELETE `/products/<id>` - Delete one product by its product ID
