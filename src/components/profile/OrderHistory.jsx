import React from 'react'

import Lottie from 'lottie-react'

import none from '../lottie/none.json'

export default function OrderHistory() {
  return (
    <div className="bg-stone-500 rounded-xl w-13 h-8 flex flex-col justify-center">
      <div className="flex justify-center items-center">
        <Lottie animationData={none} className="w-[220px] h-[220px]" />
      </div>
      <div className="text-center">
        <h2 className="text-lg pb-2"> No transactions hisstory. </h2>
        <span className="text-base font-light text-black-200">
          You have not made any purchase recently.
        </span>
      </div>
    </div>
  )
}
