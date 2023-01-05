import React from 'react'

import PagesContent from '../components/PagesContent'

export default function Checkout() {
  return (
    <>
      <PagesContent
        is_back="true"
        page_heading="Checkout"
        productAdded={<div>Checkout</div>}
      />
    </>
  )
}
