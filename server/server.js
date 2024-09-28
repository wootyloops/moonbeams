import express from 'express';
import fs from 'fs';
import cors from 'cors';

const products = JSON.parse(fs.readFileSync('./data/products.json'));
const port = process.env.PORT || 8000;
const app = express();

app.use(cors());

app.get('/api/products', (req, res) => {
  res.json(products);
})

app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(products.filter((product) => product.id === id));
})

app.listen(port, () => console.log('Server is listening on port ' + port));
