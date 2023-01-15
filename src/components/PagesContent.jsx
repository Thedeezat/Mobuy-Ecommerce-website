import React, { useContext } from 'react'

import Navigation from './navigation/Navigation'

import { productContext } from '../App'

import Lottie from 'lottie-react'

import arrow from './lottie/arrow.json'

import { Link } from 'react-router-dom'

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
  is_back,
  profile_style,
  is_profile,
}) {
  const { counter, firstName } = useContext(productContext)
  return (
    <>
      <div
        className="sm:px-5 lg:px-6 xl:px-7 2xl:px-7.1
      px-3.5 h-screen flex flex-col"
      >
        <Navigation
          counter={counter}
          cartActive={cart_true ? 'border-2 border-yellow' : ''}
          savelaterActive={savelater_true ? 'border-2 border-yellow' : ''}
          firstName={firstName}
          mobileCartIconActive={cart_true ? 'border-2 border-yellow ' : ''}
          mobileCartTextActive={cart_true ? 'text-yellow ' : ''}
          mobileSaveIconActive={savelater_true ? 'border-2 border-yellow' : ''}
          mobileSaveTextActive={savelater_true ? 'text-yellow' : ''}
          mobileProfileIconActive={is_profile ? 'border-2 border-yellow ' : ''}
          mobileProfileTextActive={is_profile ? 'text-yellow' : ''}
        />
        {/* back arrow */}
        {is_back && (
          <div className="w-7.1">
            <Link to="/">
              {' '}
              <div
                className="md:flex 2xl:text-xl 2xl:right-4 
              right-3.5 text-lg text-black-200 mt-1 relative hidden
              items-center cursor-pointer hover:text-charcoal"
              >
                <Lottie
                  animationData={arrow}
                  className="w-[50px] h-[50px] rotate-[180deg]"
                />
                <p className="ml-1">Back</p>
              </div>{' '}
            </Link>
          </div>
        )}

        {/* heading */}
        {page_heading && (
          <h2
            className={`2xl:text-2xl 2xl:max-w-[250px] 2xl:py-3 md:text-xl
             md:max-w-[230px] md:mt-2
            text-tiny mt-3 bg-ash shadow-md w-ful max-w-[180px] 
            text-left px-4 rounded-md py-2 opacity-[0.7] tracking-wide
            ${profile_style}`}
          >
            {' '}
            {page_heading}{' '}
          </h2>
        )}

        {/* empty cart item */}
        {is_cartEmpty && (
          <section
            className="
            flex relative  
            justify-center items-center h-screen"
          >
            <div
              className="md:h-7.8 md:max-w-[550px] mt-[-80px] 2xl:max-w-[700px]
               2xl:h-8 2xl:mt-[-130px]
              bg-white-300 shadow-md max-w-[450px] w-full h-7.6 rounded-2xl
              flex justify-center items-center flex-col"
            >
              {image}
              <div className={`text-center ${texts_style}`}>
                <h2 className="md:text-xl 2xl:text-2xl text-lg pb-2">
                  {' '}
                  {productstatus}{' '}
                </h2>
                <span
                  className="md:text-lg 2xl:text-xl md:px-0 
                  px-3 text-center text-sm font-light text-black-200"
                >
                  {' '}
                  {productInfo}{' '}
                </span>
              </div>
            </div>
          </section>
        )}
        {/* item added */}
        <section>{productAdded}</section>
      </div>
      {/* footer */}
    </>
  )
}
