import React from 'react'

import ProductItem from '../ProductItem'

export default function Electronics() {
  return (
    <div className="pt-6">
      {' '}
      <h2
        className="md:text-3xl
      text-2xl text-black-200"
      >
        {' '}
        Electronics{' '}
      </h2>
      <ProductItem productImage_num={0} />
    </div>
  )
}
