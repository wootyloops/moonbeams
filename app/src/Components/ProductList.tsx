import React from 'react';
import { useState, useEffect, FunctionComponent, PropsWithChildren } from 'react';
import { TProduct, IProduct } from '../types/product-types';
import ProductCard from './ProductCard';



const ProductList = () => {
  const [productList, setProductList] = useState<any[]>([]);
  const getAllProducts = () => fetch('http://localhost:5001/api/products')
    .then(response => response.json())
    .then(products => setProductList(products))
    .catch((e) => console.error(e));
  
  useEffect(() => {getAllProducts()}, [])
  const products: React.ReactElement[] = []
  productList?.forEach((item) => {
    products.push(
      <ProductCard
        key={item.name}
        product={item}
      />
    )
  })

  return (
    <div className='grid gap-4 grid-cols-3'>
      {products || 'Could not fetch products.'}
    </div>
  )
}

export default ProductList