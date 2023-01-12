import React, { useState, useContext } from 'react'

import useFetch from '../Api/useFetch'

import Rating from '@mui/material/Rating'

// import Button from '@mui/material/Button'

import PageSkeleton from '../Loader/Skeleton'

import { TextError } from '../Error'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

import { CustomSnackbar } from '../Snackbar'

import { productContext } from '../../App'

import Spinner from '../Loader/Spinner'

export default function ProductItem({ productImage_num }) {
  const {
    handleCounter,
    currency,
    searchItem,
    handleCart,
    handleSavelater,
    currentUser,
    cartLoading,
  } = useContext(productContext)

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
      {currentUser ? (
        <span className="text-sm font-out-fit">
          Product added to saved items
        </span>
      ) : (
        <span className="text-sm font-out-fit">
          You need to be loged in to save
          <br /> an item
        </span>
      )}

      {!currentUser && (
        <button
          className="border border-yellow outline-none bg-transparent
         w-[120px] mt-1 rounded-md py-[4px] text-xs font-out-fit 
        hover:bg-darkYellow hover:text-black-300"
        >
          {' '}
          Click here to login
        </button>
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
              <CustomSnackbar
                children={
                  <>
                    {/* Savelater */}
                    <div className="relative">
                      {' '}
                      <div
                        className={` 
                          md:w-[28px] md:h-[28px] 
                          absolute flex rounded-full w-[25px] h-[25px] shadow-md group
                          items-center justify-center right-1 top-1 cursor-pointer
                        `}
                        onClick={() => handleSavelater(product)}
                      >
                        <FavoriteBorderOutlinedIcon
                          className="md:scale-[1]
                          text-charcoal group-hover:text-yellow scale-[0.9]"
                        />
                      </div>
                    </div>
                  </>
                }
                message={Savelater_snackbar}
                success={currentUser ? 'True' : null}
                button_text={currentUser && 'View items'}
              />
              {/* Image */}
              <img
                src={product.images[productImage_num]}
                className="md:h-[180px] md:rounded-xl
                 h-[120px] w-full object-cover 
                 bg-stone-600 border-none rounded-lg"
                alt=""
              />{' '}
              {/* Description */}
              <div className="md:pt-3.5 px-3 pt-3">
                <h3 className="md:text-sm text-xs h-3 overflow-hidden">
                  {' '}
                  {product.title}{' '}
                </h3>
                {/* price */}
                <div
                  className="md:pt-3 
                  pt-2 flex items-center justify-between"
                >
                  <h3 className="md:text-base text-[15px] text-black-100">
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
                <div className="md:block hidden">
                  <Rating
                    name="read-only"
                    className=" pt-1"
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
                        {cartLoading ? (
                          ''
                        ) : (
                          <span className="md:text-[13px] text-[11px]">
                            {' '}
                            Add To Cart{' '}
                          </span>
                        )}
                        {cartLoading && (
                          <Spinner color="#333333" styles="absolute" />
                        )}
                      </button>
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
                {/* end of cart */}
              </div>
            </div>
          ))}
    </section>
  )
}
