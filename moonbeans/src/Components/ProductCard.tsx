import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { IProduct } from '../types/product-types'

const ProductCard: FC<IProduct> = ({product}) => {
  return (
    <div className='m-2 p-4 bg-sky-50'>
      <h2 className='text-2xl'>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  )
}

ProductCard.propTypes = {}

export default ProductCard