import React, { useState } from 'react'

import PagesContent from '../components/PagesContent'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'

import { Link } from 'react-router-dom'

import Location from '../components/profile/Location'

import OrderDetails from '../components/Checkout/OrderDetails'

import { PaymentContext } from '../components/Checkout/PaymentContext'

import Lottie from 'lottie-react'

import Tick from '../components/lottie/Tick.json'

export default function Checkout({
  cart,
  currency,
  firstName,
  currentUser,
  setOrderHistory,
}) {
  const [totalAmount, setTotalAmount] = useState()

  const {
    phoneNumber,
    dirction,
    streetAddress,
    getCountry,
    getState,
    getCity,
  } = Location()

  const checkoutLocation = `${getCountry}${getState}${getCity}${streetAddress}${
    dirction && `${dirction}`
  }`

  const locationInfo = `${getCountry} ${getState} ${getCity} ${streetAddress} ${
    dirction && `${dirction}`
  }`

  return (
    <>
      <PagesContent
        page_heading="Checkout"
        productAdded={
          <div
            className="md:grid-cols-3 
            grid grid-cols-1 mt-6 gap-2 mb-4"
          >
            {/* Delivery */}
            <section className="md:col-span-2 col-span-none">
              <div className="w-full bg-stone-500 rounded-lg">
                {/* heading */}
                <h2
                  className="2xl:text-lg 2xl:py-3.5 lg:text-base md:px-3.5 lg:px-4
                  flex items-center rounded-t-lg text-sm
                  px-3 border-b border-stone-700 py-3"
                >
                  {checkoutLocation && phoneNumber ? (
                    <div className="relative">
                      <Lottie
                        animationData={Tick}
                        className="lg:w-[35px] lg:h-[35px] h-[30px] w-[30px] mr-1"
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  Choose Delivery Details
                </h2>
                {/* Address */}
                <div
                  className="2xl:mx-3.5 lg:mx-3 md:flex-row
                 flex-col flex py-5 justify-between mx-2 items-start"
                >
                  <div
                    className="2xl:text-base 2xl:px-4 2xl:py-3.5 lg:text-sm
                    lg:px-3.5 2xl:max-w-[600px]
                    max-w-[450px] py-3 px-3 bg-stone-500 border
                  border-white-700 rounded-tiny flex shadow-sm
                  flex-col items-start justify-center text-black-100 text-xs"
                  >
                    <p>
                      {' '}
                      Hi {firstName}, Click on Add Address to specify a delivery
                      address.
                    </p>
                    {/* Delivery detail */}
                    <div className="mt-3.5 flex flex-col gap-y-2">
                      {/* Location */}
                      <p className="2xl:text-base lg:text-sm text-xs flex items-start">
                        <LocationOnOutlinedIcon
                          fontSize="medium"
                          className="lg:mr-2 mr-1 mt-[3px] text-darkYellow"
                        />
                        Locations:
                        <p className="opacity-[0.6] ml-2">
                          {checkoutLocation ? (
                            <span>{locationInfo}</span>
                          ) : (
                            <span className="opacity-[0.4] text-black-200">
                              {' '}
                              Not yet added
                            </span>
                          )}{' '}
                        </p>
                      </p>
                      {/* Phone */}
                      <p className="2xl:text-base lg:text-sm text-xs flex items-center">
                        <LocalPhoneOutlinedIcon
                          fontSize="medium"
                          className="lg:mr-2 mr-1 text-darkYellow"
                        />
                        Mobile Number:{' '}
                        <p className="opacity-[0.6] ml-2">
                          {' '}
                          {phoneNumber ? (
                            phoneNumber
                          ) : (
                            <span className="opacity-[0.4] text-black-200">
                              {' '}
                              Not yet added
                            </span>
                          )}{' '}
                        </p>
                      </p>
                    </div>

                    <Link to="/profile">
                      <button
                        className="2xl:text-base 2xl:w-[120px] 2xl:h-[40px] 2xl:mt-4 lg:w-[110px]
                        lg:h-[37px] lg:text-sm
                        bg-stone-200 w-[85px] h-[30px] rounded-md
                       text-white-300 text-xs hover:bg-charcoal mt-3.5"
                      >
                        Add Address
                      </button>
                    </Link>
                  </div>
                  {/* address info */}
                  <div
                    className="2xl:text-base md:mt-0 lg:text-sm md:px-2 lg:px-3.5
                    py-2 px-3 bg-stone-700 border
                    mt-3 border-white-700 rounded-tiny flex opacity-[0.8]
                    items-center text-black-100 text-xs shadow-sm"
                  >
                    Your item should be delivered to you in about 5 <br />{' '}
                    working days within your country, and 7 to 14 <br /> days
                    outside your country.
                  </div>
                </div>
              </div>
              {/* PaymentOption */}
              <PaymentContext
                checkoutLocation={checkoutLocation}
                phoneNumber={phoneNumber}
                totalAmount={totalAmount}
                currentUser={currentUser}
                setOrderHistory={setOrderHistory}
              />
            </section>

            {/* Order Summary */}
            <OrderDetails
              cart={cart}
              currency={currency}
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
            />
          </div>
        }
      />
    </>
  )
}
