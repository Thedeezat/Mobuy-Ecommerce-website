import React, { useContext } from 'react'

import Navigation from './navigation/Navigation'

import { productContext } from '../App'

import Lottie from 'lottie-react'

import arrow from './lottie/arrow.json'

import { Link } from 'react-router-dom'

import Footer from './footer/Footer'

export default function PagesContent({
  productstatus,
  productInfo,
  image,
  cart_true,
  savelater_true,
  page_heading,
  texts_style,
  productAdded,
  is_cartEmpty,
}) {
  const { counter } = useContext(productContext)
  return (
    <div className="">
      <div className="px-7 h-screen flex flex-col">
        <Navigation
          counter={counter}
          cartActive={cart_true ? 'border-2 border-yellow' : ''}
          savelaterActive={savelater_true ? 'border-2 border-yellow' : ''}
        />
        {/* back arrow */}
        <Link to="/">
          {' '}
          <h2
            className="text-lg text-black-200 mt-1 relative 
            right-3.5 flex items-center cursor-pointer hover:text-charcoal"
          >
            <Lottie
              animationData={arrow}
              className="w-[50px] h-[50px] rotate-[180deg]"
            />
            <span className="ml-2">Back</span>
          </h2>{' '}
        </Link>
        {/* heading */}
        <h2
          className="text-xl mt-2 bg-ash shadow-md w-7.3 
          text-left px-4 rounded-md py-2 opacity-[0.7] tracking-wide"
        >
          {' '}
          {page_heading}{' '}
        </h2>
        {/* empty cart item */}
        {is_cartEmpty && (
          <section className="absolute top-[34vh] flex justify-center left-0 right-0">
            <div
              className="bg-white-300 shadow-md w-11 h-7.8 rounded-2xl
              flex justify-center items-center flex-col"
            >
              {image}
              <div className={`text-center ${texts_style}`}>
                <h2 className="text-xl pb-2"> {productstatus} </h2>
                <span className="text-lg font-light text-black-200">
                  {' '}
                  {productInfo}{' '}
                </span>
              </div>
            </div>
          </section>
        )}
        {/* item added to cart */}
        <section>{productAdded}</section>
      </div>
      {/* footer */}
      <Footer className="w-full " />
    </div>
  )
}
