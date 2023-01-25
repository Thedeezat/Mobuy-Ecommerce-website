import React from 'react'

import Lottie from 'lottie-react'

import Tick from '../lottie/Tick.json'

import { usePaystackPayment } from 'react-paystack'

import { useHistory } from 'react-router-dom'

export function PaymentContext({
  checkoutLocation,
  phoneNumber,
  totalAmount,
  currentUser,
  setOrderHistory,
}) {
  const history = useHistory()
  const disable = checkoutLocation && phoneNumber ? false : true
  const total_price = totalAmount * 100

  const config = {
    reference: new Date().getTime().toString(),
    email: currentUser ? currentUser.email : '',
    amount: total_price, // 20000 kobo = N200
    publicKey: 'pk_live_a9e1bfa00d271a8d393d7196b25246d61b0898d8',
  }
  const initializePayment = usePaystackPayment(config)
  const onSuccess = () => {
    // Implementation for whatever you want to do with reference and after success call.
    history.push('/')
    setOrderHistory(true)
  }
  const onClose = () => {
    // implementation for whatever you want to do when the Paystack dialog closed.
  }

  return (
    <section
      className="lg:px-4 md:px-3.5 lg:h-7.1
      h-7 flex justify-between items-center mt-5
     bg-stone-500 rounded-lg px-3 py-3"
    >
      {/* heading */}
      <h2 className="2xl:text-lg lg:text-base md:pr-0 pr-3 flex items-center text-sm">
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
        Payment Checkout
      </h2>
      <button
        onClick={(e) => {
          e.preventDefault()
          initializePayment(onSuccess, onClose)
        }}
        disabled={disable}
        className={`2xl:text-base 2xl:w-[120px] 2xl:h-[40px] 
          lg:w-[110px] lg:h-[37px] lg:text-[15px]
          bg-stone-200 w-[85px] h-[30px] rounded-md
         text-white-300 text-xs hover:bg-charcoal
         ${
           checkoutLocation && phoneNumber
             ? ''
             : 'opacity-[0.5] hover:bg-stone-200'
         }`}
      >
        Checkout
      </button>
    </section>
  )
}
