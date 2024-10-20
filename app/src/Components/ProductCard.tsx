import { FC } from 'react';
import { IProduct } from '../types/product-types';
import { Link } from 'react-router-dom';
import imgDefaultProduct from '../assets/products/default.png';


const ProductCard: FC<IProduct> = ({product}) => {

  const inStock = (product.stock > 0) ? true : false;

  return (
    <div className='p-4 bg-sky-100 rounded-md grid'>
      <div className='row-start-1 h-all'>
      <Link to={'/product/' + product.productID}>
        <img alt={product.name} className={'rounded-t-md ' + (inStock ? '' : 'grayscale')} src={imgDefaultProduct} />
        <h2 className='text-2xl text-sky-950'>
          {product.name}
        </h2>
        </Link>
        <p className='h-all'>{product.description}</p>
      </div>
      { inStock ? 
        <button className='h-min w-1/2 bg-sky-950 hover:bg-sky-900 p-2 mt-2 text-amber-200 rounded-md row-start-3'>Add to Cart</button> 
        : <button className='h-min w-1/2 bg-slate-400 p-2 mt-2 text-slate-700 rounded-md row-start-3' disabled>Out Of Stock</button> 
      }
    </div>
  )
}

export default ProductCard