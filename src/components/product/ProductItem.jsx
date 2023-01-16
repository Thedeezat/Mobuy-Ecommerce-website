import React, { useState, useContext } from 'react'

import useFetch from '../Api/useFetch'

import Rating from '@mui/material/Rating'

import PageSkeleton from '../Loader/Skeleton'

import { TextError } from '../Error'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

import { CustomSnackbar } from '../Snackbar'

import { productContext } from '../../App'

import { Link } from 'react-router-dom'

export default function ProductItem({ productImage_num }) {
  const {
    currency,
    searchItem,
    handleCart,
    handleSavelater,
    currentUser,
    saveAdded,
    cartAdded,
  } = useContext(productContext)

  const { data: products, loading, error } = useFetch(
    'https://api.escuelajs.co/api/v1/products',
  )
  const [productTitle, setProductTitle] = useState('')

  const handleAddToCart = (item) => {
    setProductTitle(item.title)
    handleCart(item)
  }
  const Savelater_snackbar = (
    <div className="flex flex-col">
      {currentUser ? (
        <span className="md:text-sm text-xs font-out-fit">
          {saveAdded
            ? 'Product already in saved items'
            : ' Product added to saved items'}
        </span>
      ) : (
        <span className="md:text-sm text-xs font-out-fit">
          You need to be loged in to save
          <br /> an item
        </span>
      )}

      {!currentUser && (
        <Link to="/account/login">
          <button
            className="md:text-xs md:w-[120px]
            border border-yellow outline-none bg-transparent
            w-[90px] mt-1 rounded-md py-[4px] text-xxs font-out-fit 
           hover:bg-darkYellow hover:text-black-300"
          >
            {' '}
            Click here to login
          </button>
        </Link>
      )}
    </div>
  )

  return (
    <section
      className="md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-4 
      pt-4 grid grid-cols-2 gap-2 text-black-200"
    >
      {loading && <PageSkeleton />}
      {error && <TextError error={error} />}

      {products &&
        products
          .filter((val) => {
            if (searchItem === ' ') {
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
              className={`md:rounded-xl
              pb-2 bg-stone-500 ${
                product.id >= 310 ? 'hidden' : ''
              } rounded-lg overflow-hidden`}
            >
              <div className="">
                <CustomSnackbar
                  children={
                    <>
                      {/* Savelater */}
                      <div className="relative">
                        {' '}
                        <div
                          className={` 
                          md:w-[28px] md:h-[28px] 
                          absolute flex rounded-full w-[25px] h-[25px] shadow-md group opacity-[0.7]
                          items-center justify-center bg-stone-500 right-2 top-2 cursor-pointer
                          hover:opacity-[0.8]
                        `}
                          onClick={() => handleSavelater(product)}
                        >
                          <FavoriteBorderOutlinedIcon
                            className="md:scale-[1]
                          text-black-100 group-hover:text-black-100 scale-[0.9]"
                          />
                        </div>
                      </div>
                    </>
                  }
                  message={Savelater_snackbar}
                  success={currentUser ? 'True' : null}
                  button_text={currentUser && 'View items'}
                />
              </div>
              {/* Image */}
              <img
                src={product.images[productImage_num]}
                className="md:h-[180px] md:rounded-xl
                 h-[120px] w-full object-cover 
                 bg-stone-600 border-none rounded-lg"
                alt=""
              />{' '}
              {/* Description */}
              <div className="px-3 pt-3">
                <h3
                  className="md:text-sm 2xl:text-base 2xl:h-4 
                  text-xs h-3.5 overflow-hidden"
                >
                  {' '}
                  {product.title}{' '}
                </h3>
                {/* price */}
                <div
                  className="md:pt-3 
                  pt-2 flex items-center justify-between"
                >
                  <h3 className="md:text-base 2xl:text-tiny text-[15px] text-black-100">
                    {' '}
                    {currency}
                    {product.price}{' '}
                  </h3>
                  <h4
                    className="line-through tracking-wider 
                    text-sm 2xl:text-base opacity-[0.8]"
                  >
                    {' '}
                    {currency}
                    {product.price + 70}{' '}
                  </h4>
                </div>
                {/* Rating */}
                <div className="md:block hidden">
                  <Rating
                    name="read-only"
                    className="2xl:scale-[1.1] pt-1"
                    value="4"
                    readOnly
                  />
                </div>
                {/* Add to cart */}
                <div className="">
                  <CustomSnackbar
                    children={
                      <button
                        className="md:h-[36px] md:rounded-xl md:mt-3
                        w-[100%] h-[30px] rounded-lg bg-transparent
                        text-black-200 hover:bg-lightYellow font-out-fit
                        border border-darkYellow mt-3"
                        onClick={() => handleAddToCart(product)}
                      >
                        {' '}
                        <span className="md:text-[13px] 2xl:text-[14px] text-[11px]">
                          {' '}
                          Add To Cart{' '}
                        </span>
                      </button>
                    }
                    message={
                      cartAdded ? (
                        <span className="md:text-sm text-xs">
                          {productTitle} <br />
                          is alredy in the cart
                        </span>
                      ) : (
                        <span className="md:text-sm text-xs">
                          {productTitle} <br />
                          has been added to cart
                        </span>
                      )
                    }
                    button_text=" View Cart"
                    success="True"
                  />
                </div>
                {/* end of cart */}
              </div>
            </div>
          ))}
    </section>
  )
}
