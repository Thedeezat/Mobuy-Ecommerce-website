import React from 'react'

import ProductItem from '../ProductItem'

export default function AllCategory() {
  return (
    <div className="pt-6">
      {' '}
      <h2 className="text-3xl text-black-200"> Popular Items</h2>
      <ProductItem productImage_num={0} />
    </div>
  )
}
