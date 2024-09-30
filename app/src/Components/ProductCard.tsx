import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { IProduct } from '../types/product-types'
import { Link } from 'react-router-dom'

const ProductCard: FC<IProduct> = ({product}) => {
  return (
    <div className='p-4 bg-sky-100 rounded-md'>
      <h2 className='text-2xl text-sky-950'>{product.name}</h2>
      <p>{product.description}</p>
      {product.stock > 0 ? <p>In stock!</p> : <p>Out of stock!</p>}
      <Link to={'/product/' + product.productID}>More info</Link>
      <button className='block bg-sky-950 hover:bg-sky-900 p-2 mt-2 text-amber-100 rounded-md'>Add to Cart</button>
    </div>
  )
}

ProductCard.propTypes = {}

export default ProductCard