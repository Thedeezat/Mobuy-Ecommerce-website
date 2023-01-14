import React from 'react'

import Lottie from 'lottie-react'

import none from '../lottie/none.json'

export default function OrderHistory() {
  return (
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
          No transactions hisstory.{' '}
        </h2>
        <span className="2xl:text-lg md:text-base text-sm font-light text-black-200">
          You have not made any purchase recently.
        </span>
      </div>
    </div>
  )
}
