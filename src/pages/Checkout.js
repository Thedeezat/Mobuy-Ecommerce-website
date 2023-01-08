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

export default function Checkout({ cart, currency }) {
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
          <div className="mt-6 flex justify-between gap-x-2">
            {/* Delivery */}
            <section>
              <div className="w-13 bg-stone-500 rounded-lg">
                {/* heading */}
                <h2
                  className="flex items-center rounded-t-lg text-base
                  px-4 border-b border-stone-700 py-3"
                >
                  {checkoutLocation && phoneNumber ? (
                    <div className="relative">
                      <Lottie
                        animationData={Tick}
                        className="w-[35px] h-[35px] mr-1"
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  Choose Delivery Details
                </h2>
                {/* Address */}
                <div className="flex py-5 justify-between mx-3 items-start">
                  <div
                    className="w-8.1 py-3 px-3.5 bg-stone-500 border
                  border-white-700 rounded-tiny flex shadow-sm
                  flex-col items-start justify-center text-black-100 text-sm "
                  >
                    <p>
                      {' '}
                      Hi hadiza, Click on Add Address to specify a delivery
                      address.
                    </p>
                    {/* Delivery detail */}
                    <div className="mt-3.5 flex flex-col gap-y-2">
                      {/* Location */}
                      <p className="text-sm flex items-start">
                        <LocationOnOutlinedIcon
                          fontSize="medium"
                          className="mr-2 mt-[3px] text-darkYellow"
                        />
                        Location:{' '}
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
                      <p className="text-sm flex items-center">
                        <LocalPhoneOutlinedIcon
                          fontSize="medium"
                          className="mr-2 text-darkYellow"
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
                        className="bg-stone-200 w-[110px] h-[37px] rounded-md
                       text-white-300 text-sm hover:bg-charcoal mt-3.5"
                      >
                        Add Address
                      </button>
                    </Link>
                  </div>
                  {/* address info */}
                  <div
                    className="w-7.7 px-3 h-7.1 bg-stone-700 border
                  border-white-700 rounded-tiny flex opacity-[0.8]
                    items-center text-black-100 text-sm shadow-sm"
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
