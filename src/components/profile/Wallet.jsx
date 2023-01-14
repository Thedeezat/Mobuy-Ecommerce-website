import React from 'react'

import Lottie from 'lottie-react'

import comingsoon from '../lottie/comingsoon.json'

export default function Wallet() {
  return (
    <div
      className="bg-stone-500 relative max-w-[900px] rounded-xl w-full h-8 flex flex-col
     justify-center overflow-hidden opacity-[0.7]"
    >
      <div className="absolute left-0 flex justify-center items-center">
        <Lottie
          animationData={comingsoon}
          className="md:w-10 md:h-10 w-8 h-8"
        />
      </div>
      <div className="hidden lg:block left-7.2 relative text-center">
        <h2 className="text-base pb-2">
          {' '}
          The wallet feature will be <br />
          available soon...{' '}
        </h2>
      </div>
    </div>
  )
}
