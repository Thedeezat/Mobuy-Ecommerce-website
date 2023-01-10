import React from 'react'

import ProductItem from '../ProductItem'

export default function Clothes() {
  return (
    <div className="pt-6">
      <h2
        className="md:text-3xl
      text-2xl text-black-200"
      >
        {' '}
        Clothes{' '}
      </h2>
      <ProductItem productImage_num={1} />
    </div>
  )
}
