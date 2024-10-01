import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { IProduct } from '../types/product-types'
import { Link } from 'react-router-dom'

const ProductCard: FC<IProduct> = ({product}) => {

  const inStock = (product.stock > 0) ? true : false;

  return (
    <div className='p-4 bg-sky-100 rounded-md grid'>
      <div className='row-start-1 h-all'>
        <h2 className='text-2xl text-sky-950'>{product.name}</h2>
        <p className='h-all'>{product.description}</p>
        { inStock ? <p className='text-sm'>In Stock!</p> : <p className='text-sm text-red-500'>Out of Stock</p> }
        <div className='block'><Link to={'/product/' + product.productID}>More info</Link></div>
      </div>
      {
        // @TODO: fix button rendering 
      }
      <button className='h-min w-1/2 bg-sky-950 hover:bg-sky-900 p-2 mt-2 text-amber-200 rounded-md row-start-3'>Add to Cart</button>
    </div>
  )
}

ProductCard.propTypes = {}

export default ProductCard