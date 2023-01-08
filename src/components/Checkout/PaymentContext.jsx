import React from 'react'

import Lottie from 'lottie-react'

import Tick from '../lottie/Tick.json'

export function PaymentContext({ checkoutLocation, phoneNumber, totalAmount }) {
  const disable = checkoutLocation && phoneNumber ? false : true

  return (
    <section
      className="w-13 h-7.1 flex justify-between items-center mt-5
     bg-stone-500 rounded-lg px-4 py-3"
    >
      {/* heading */}
      <h2 className="flex items-center text-base">
        {checkoutLocation && phoneNumber ? (
          <div className="relative">
            <Lottie animationData={Tick} className="w-[35px] h-[35px] mr-1" />
          </div>
        ) : (
          ''
        )}
        Payment Checkout
      </h2>
      <a href="https://buy.stripe.com/test_aEUeVsgeBgKa7VS6op">
        <button
          disabled={disable}
          className={`bg-stone-200 w-[110px] h-[37px] rounded-md
        text-white-300 text-[15px] hover:bg-charcoal
         ${
           checkoutLocation && phoneNumber
             ? ''
             : 'opacity-[0.5] hover:bg-stone-200'
         }`}
        >
          Checkout
        </button>
      </a>
    </section>
  )
}
