import React from 'react'

import Lottie from 'lottie-react'

import comingsoon from '../lottie/comingsoon.json'

export default function Wallet() {
  return (
    <div
      className="bg-stone-500 relative rounded-xl w-13 h-8 flex flex-col
     justify-center overflow-hidden opacity-[0.7]"
    >
      <div className="absolute left-0 flex justify-center items-center">
        <Lottie animationData={comingsoon} className="w-10 h-10" />
      </div>
      <div className="relative text-center left-7.2">
        <h2 className="text-lg pb-2">
          {' '}
          The wallet feature will be available soon...{' '}
        </h2>
      </div>
    </div>
  )
}
