import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { IProduct } from '../types/product-types'

const ProductCard: FC<IProduct> = ({product}) => {
  return (
    <div className='p-4 bg-sky-100 rounded-md'>
      <h2 className='text-2xl text-sky-950'>{product.name}</h2>
      <p>{product.description}</p>
      {product.inStock ? <p>In stock!</p> : <p>Out of stock!</p>}
    </div>
  )
}

ProductCard.propTypes = {}

export default ProductCard