import React, { useState, useContext } from 'react'

import useFetch from '../Api/useFetch'

import Rating from '@mui/material/Rating'

import Button from '@mui/material/Button'

import Loader from '../Loader'

import Error from '../Error'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

import { CustomSnackbar } from '../Snackbar'

import { productContext } from '../../App'

export default function ProductItem({ productImage_num }) {
  const { handleCounter, currency, searchItem, handleCart } = useContext(
    productContext,
  )

  const { data: products, loading, error } = useFetch(
    'https://api.escuelajs.co/api/v1/products',
  )
  const [productTitle, setProductTitle] = useState('')

  const handleAddToCart = (item) => {
    setProductTitle(item.title)
    handleCart(item)
    handleCounter()
  }
  const Savelater_snackbar = (
    <div className="flex flex-col">
      <span className="text-sm font-out-fit">
        You need to be loged in to save
        <br /> an item
      </span>
      <button
        className="border border-yellow outline-none bg-transparent
        w-[120px] mt-1 rounded-md py-[4px] text-xs font-out-fit 
        hover:bg-darkYellow hover:text-black-300"
      >
        {' '}
        Click here to login{' '}
      </button>
    </div>
  )

  return (
    <section className="pt-4 grid grid-cols-4 gap-4 text-black-200 ">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products &&
        products
          .filter((val) => {
            if (searchItem == ' ') {
              return val
            } else if (
              val.title.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return val
            }
          })
          .map((product) => (
            <div
              key={product.id}
              className={`pb-4 h-[350px] w-[305px] bg-stone-500 ${
                product.id >= 130 ? 'hidden' : ''
              } rounded-lg rounded-t-2xl overflow-hidden`}
            >
              <CustomSnackbar
                children={
                  <>
                    {/* Savelater */}
                    <div className="relative">
                      {' '}
                      <div
                        className="absolute bg-white-600 flex
                       rounded-full w-[28px] h-[28px] shadow-md group
                       items-center justify-center right-1 top-1 cursor-pointer
                        "
                      >
                        <FavoriteBorderOutlinedIcon
                          className="text-charcoal
                        group-hover:text-yellow"
                        />
                      </div>
                    </div>
                  </>
                }
                message={Savelater_snackbar}
              />
              {/* Image */}
              <img
                src={product.images[productImage_num]}
                className="h-7.2 w-full object-cover rounded-2xl
                 bg-stone-600 border-none"
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
                <CustomSnackbar
                  children={
                    <Button
                      variant="outlined"
                      className="relative top-2"
                      onClick={() => handleAddToCart(product)}
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
                  }
                  message={
                    <span>
                      {productTitle} <br />
                      has been added to cart
                    </span>
                  }
                  button_text=" View Cart"
                  success="True"
                />
              </div>
            </div>
          ))}
    </section>
  )
}
