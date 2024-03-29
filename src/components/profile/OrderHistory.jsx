import React from 'react'

import Lottie from 'lottie-react'

import none from '../lottie/none.json'

export default function OrderHistory({ orderHistory }) {
  return (
    <>
      {orderHistory ? (
        <div
          className="bg-stone-500 rounded-xl max-w-[900px] w-full p-3.5 2xl:p-4
         flex flex-col justify-center px-5 text-base 2xl:text-lg"
        >
          Product has been ordered.
          <p className="md:text-sm 2xl:text-base text-xs my-2 max-w-[370px]">
            {' '}
            Your order is been tracked, an email and sms will be sent when ready
            for pickup.{' '}
          </p>
        </div>
      ) : (
        <div className="bg-stone-500 rounded-xl max-w-[900px] w-full h-8 flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <Lottie
              animationData={none}
              className="2xl:w-[240px] 2xl:h-[240px] md:w-[220px] md:h-[220px] w-[200px] h-[200px]"
            />
          </div>
          <div className="text-center">
            <h2 className="2xl:text-2xl md:text-lg text-base pb-2">
              {' '}
              No transactions history.{' '}
            </h2>
            <span className="2xl:text-lg md:text-base text-sm font-light text-black-200">
              You have not made any purchase recently.
            </span>
          </div>
        </div>
      )}
    </>
  )
}
