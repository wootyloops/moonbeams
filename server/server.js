import express from 'express';
import fs from 'fs';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

// https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
import { router } from  './routes/routes.js';

// const products = JSON.parse(fs.readFileSync('./data/products.json'));
const port = process.env.PORT || 8000;
const app = express(); 

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
})); 
app.use(express.json()); 
app.use(cookieParser()); 
app.use('/api', router);

// Test connection to database
const dbConnectionString = process.env.DB_URL;
mongoose.connect(dbConnectionString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})
database.once('connected', () => {
  console.log('Database connected successfully!');
})

// Set up listener
app.listen(port, () => console.log('Server is listening on port ' + port));
