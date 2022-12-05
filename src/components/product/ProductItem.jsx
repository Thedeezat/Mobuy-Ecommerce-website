import React, { useState } from 'react'

import useFetch from '../Api/useFetch'

import Rating from '@mui/material/Rating'

import Button from '@mui/material/Button'

export default function ProductItem() {
  const [currency, setCurrency] = useState('$')

  const { data: products, isPending, error } = useFetch(
    'https://api.escuelajs.co/api/v1/products',
  )
  //   console.log(products)
  return (
    <section className="pt-4 grid grid-cols-4 gap-4 text-black-200 ">
      {products
        ? products.map((product) => (
            <div
              key={product.id}
              className={`pb-4 h-[350px] bg-stone-500 ${
                product.id >= 20 ? 'hidden' : ''
              } rounded-md`}
            >
              {/* Image */}
              <img
                src={product.images[0]}
                className="w-7.5 h-7.2 object-cover rounded-2xl"
              />{' '}
              {/* Description */}
              <div className="pt-3.5 px-3">
                <h3 className="text-sm"> {product.title} </h3>
                {/* price */}
                <div
                  className="flex items-center justify-between
                   pt-2"
                >
                  <h3 className="text-base text-black-100">
                    {' '}
                    {currency}
                    {product.price}{' '}
                  </h3>
                  <h4
                    className="line-through tracking-wider 
                    text-sm opacity-[0.8]"
                  >
                    {' '}
                    {currency}
                    {product.price + 70}{' '}
                  </h4>
                </div>
                {/* Rating */}
                <Rating name="read-only" className="pt-1" value="4" readOnly />
                {/* Add to cart */}
                <Button
                  variant="outlined"
                  className="relative top-2"
                  sx={{
                    boxShadow: 'none',
                    border: '1.2px solid rgba(230, 155, 0, 0.5)',
                    width: '100%',
                    height: '35px',
                    fontFamily: 'outfit',
                    fontSize: '11px',
                    color: '#333333',
                    borderRadius: '10px',
                    '&:hover': {
                      background: 'rgba(230, 155, 0, 0.2)',
                      boxShadow: 'none',
                      border: '1.2px solid rgba(230, 155, 0, 0.5)',
                    },
                  }}
                >
                  {' '}
                  Add to cart{' '}
                </Button>
              </div>
            </div>
          ))
        : ''}
    </section>
  )
}
