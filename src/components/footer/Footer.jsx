import React from 'react'

import { RiFacebookFill } from 'react-icons/ri'

import { AiFillInstagram } from 'react-icons/ai'

import { BsTwitter } from 'react-icons/bs'

import { AiFillYoutube } from 'react-icons/ai'

import Lottie from 'lottie-react'

import arrowup from '../lottie/arrowup.json'

export default function Footer() {
  return (
    <footer
      className="mt-7 px-7 py-7 text-black-200 bg-stone-500
     w-screen "
    >
      <div className="flex items-start justify-start gap-x-[150px]">
        <div className="flex flex-col">
          {/* Logo */}
          <h4 className="text-black-100 text-3xl mb-3"> Mobuy </h4>
          <p className="pt-2 text-sm">
            Cricklewood, London <br />
            NW2 6qg, Uk
          </p>
          {/* Social media */}
          <div className="mt-3 flex gap-2">
            <div
              className="w-4 h-4 border border-black-200
           flex items-center justify-center rounded-full
           cursor-pointer hover:bg-gray hover:scale-[1.1]"
            >
              {' '}
              <RiFacebookFill className="w-3 h-3 text" />
            </div>
            <div
              className="w-4 h-4 border border-black-200
           flex items-center justify-center rounded-full
           cursor-pointer hover:bg-gray hover:scale-[1.1]"
            >
              {' '}
              <AiFillInstagram className="w-3 h-3 text" />
            </div>
            <div
              className="w-4 h-4 border border-black-200
           flex items-center justify-center rounded-full
           cursor-pointer hover:bg-gray hover:scale-[1.1]"
            >
              {' '}
              <BsTwitter className="w-3 h-3" />
            </div>
            <div
              className="w-4 h-4 border border-black-200
           flex items-center justify-center rounded-full
           cursor-pointer hover:bg-gray hover:scale-[1.1]"
            >
              {' '}
              <AiFillYoutube className="w-3 h-3" />
            </div>
          </div>
        </div>
        {/* Shop */}
        <div className="flex flex-col gap-y-2 text-sm tracking-wide">
          <h4 className="font-medium text-base">Shop</h4>
          <p className="cursor-pointer hover:text-stone-300">Gift cards</p>
          <p className="cursor-pointer hover:text-stone-300">Site map</p>
          <p className="cursor-pointer hover:text-stone-300">Polka blog</p>
          <p className="cursor-pointer hover:text-stone-300">Bulk purchase</p>
          <p className="cursor-pointer hover:text-stone-300">Delivery</p>
        </div>
        {/* Sell */}
        <div className="flex flex-col gap-y-2 text-sm tracking-wide">
          <h4 className="font-medium text-base">Sell</h4>
          <p className="cursor-pointer hover:text-stone-300">Sell on Polka</p>
          <p className="cursor-pointer hover:text-stone-300">Teams</p>
          <p className="cursor-pointer hover:text-stone-300">Forums</p>
          <p className="cursor-pointer hover:text-stone-300">Affiliates</p>
        </div>
        {/* About */}
        <div className="flex flex-col gap-y-2 text-sm tracking-wide">
          <h4 className="font-medium text-base">About</h4>
          <p className="cursor-pointer hover:text-stone-300">Polka, Inc.</p>
          <p className="cursor-pointer hover:text-stone-300">Policies</p>
          <p className="cursor-pointer hover:text-stone-300">Investors</p>
          <p className="cursor-pointer hover:text-stone-300">Careers</p>
          <p className="cursor-pointer hover:text-stone-300">Press</p>
        </div>
        {/* Help */}
        <div className="flex flex-col gap-y-2 text-sm tracking-wide">
          <h4 className="font-medium text-base">Help</h4>
          <p className="cursor-pointer hover:text-stone-300">Help Center</p>
          <p className="cursor-pointer hover:text-stone-300">
            Trust and safety
          </p>
          <p className="cursor-pointer hover:text-stone-300">
            Privacy settings
          </p>
        </div>
      </div>
      {/* Terms / conditions */}
      <div className="mt-6 text-sm flex gap-x-5">
        <p className="mr-[120px]">© 2022 Commerce, Inc.</p>
        <p className="cursor-pointer hover:text-stone-300">Privacy policy</p>
        <p className="text-yellow cursor-pointer hover:text-stone-300">
          Terms of use
        </p>
        <p className="cursor-pointer hover:text-stone-300">Cookies</p>
        {/* Scroll up */}
        <p
          className="text-base text-black-200 relative left-10 flex
         justify-center items-end cursor-pointer opacity-[0.7] hover:opacity-[0.9]"
        >
          <span className="mr-[3px]"> Scroll to top </span>
          <div className="rotate-[180deg] w-[30px] h-[30px]">
            <Lottie animationData={arrowup} />
          </div>
        </p>
      </div>
    </footer>
  )
}
