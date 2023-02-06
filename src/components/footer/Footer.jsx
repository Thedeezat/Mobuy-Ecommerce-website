import React from 'react'

import { RiFacebookFill } from 'react-icons/ri'

import { AiFillInstagram } from 'react-icons/ai'

import { BsTwitter } from 'react-icons/bs'

import { AiFillYoutube } from 'react-icons/ai'

import Lottie from 'lottie-react'

import arrowup from '../lottie/arrowup.json'

import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Footer() {
  const footerTexts_Heading = 'font-medium 2xl:text-lg text-base'
  const footerTexts = 'cursor-pointer 2xl:text-base hover:text-stone-300'

  return (
    <footer
      className="sm:px-5 lg:px-6 xl:px-7 2xl:px-7.1
      mt-7 px-3.5 py-7 text-black-200 bg-stone-500 w-screen "
    >
      <div
        className="md:flex-row 
        flex flex-col items-start justify-start gap-x-[150px]"
      >
        {/* intro */}
        <div className="md:pb-0 pb-6 flex flex-col ">
          <h4 className="2xl:text-4xl lg:mb-3 text-black-100 text-3xl mb-1">
            {' '}
            Mobuy{' '}
          </h4>
          <p className="2xl:text-base pt-2 text-sm">
            Cricklewood, London <br />
            NW2 6qg, Uk
          </p>
          {/* Social media */}
          <div className="2xl:mt-4 mt-3 flex gap-3 md:gap-2 2xl:gap-3.5">
            <div
              className="2xl:scale-[1.2] 2xl:hover:scale-[1.3]
              w-4 h-4 border border-black-200
              flex items-center justify-center rounded-full
             cursor-pointer hover:bg-gray hover:scale-[1.1]"
            >
              {' '}
              <RiFacebookFill className="w-3 h-3 text" />
            </div>
            <div
              className="2xl:scale-[1.2] 2xl:hover:scale-[1.3]
              w-4 h-4 border border-black-200
             flex items-center justify-center rounded-full
             cursor-pointer hover:bg-gray hover:scale-[1.1]"
            >
              {' '}
              <AiFillInstagram className="w-3 h-3 text" />
            </div>
            <div
              className="2xl:scale-[1.2] 2xl:hover:scale-[1.3]
              w-4 h-4 border border-black-200
             flex items-center justify-center rounded-full
             cursor-pointer hover:bg-gray hover:scale-[1.1]"
            >
              {' '}
              <BsTwitter className="w-3 h-3" />
            </div>
            <div
              className="2xl:scale-[1.2] 2xl:hover:scale-[1.3]
              w-4 h-4 border border-black-200
           flex items-center justify-center rounded-full
           cursor-pointer hover:bg-gray hover:scale-[1.1]"
            >
              {' '}
              <AiFillYoutube className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* product info  */}
        <div
          className="lg:justify-between lg:flex lg:w-[900px] 2xl:w-[1000px] sm:grid-cols-3 
          grid grid-cols-2 w-full gap-y-6 gap-x-5"
        >
          {/* Shop */}
          <div className="flex flex-col gap-y-2 text-sm tracking-wide">
            <h4 className={footerTexts_Heading}>Shop</h4>
            <p className={footerTexts}>Gift cards</p>
            <p className={footerTexts}>Site map</p>
            <p className={footerTexts}>Polka blog</p>
            <p className={footerTexts}>Bulk purchase</p>
            <p className={footerTexts}>Delivery</p>
            <p className={footerTexts}>Privacy policy</p>
          </div>
          {/* Sell */}
          <div className="flex flex-col gap-y-2 text-sm tracking-wide">
            <h4 className={footerTexts_Heading}>Sell</h4>
            <p className={footerTexts}>Sell on Polka</p>
            <p className={footerTexts}>Teams</p>
            <p className={footerTexts}>Forums</p>
            <p className={footerTexts}>Affiliates</p>
            <p className={footerTexts}>Terms of use</p>
          </div>
          {/* About */}
          <div className="flex flex-col gap-y-2 text-sm tracking-wide">
            <h4 className={footerTexts_Heading}>About</h4>
            <p className={footerTexts}>Polka, Inc.</p>
            <p className={footerTexts}>Policies</p>
            <p className={footerTexts}>Investors</p>
            <p className={footerTexts}>Careers</p>
            <p className={footerTexts}>Press</p>
          </div>
          {/* Help */}
          <div className="flex flex-col gap-y-2 text-sm tracking-wide">
            <h4 className={footerTexts_Heading}>Help</h4>
            <p className={footerTexts}>Help Center</p>
            <p className={footerTexts}>Trust and safety</p>
            <p className={footerTexts}>Privacy settings</p>
            <p className={footerTexts}>Cookies</p>
          </div>
        </div>
      </div>
      {/* Terms / conditions */}
      <div className="flex justify-between 2xl:text-base lg:mt-6 md:mt-7 text-sm mt-5">
        <p>© 2022 Commerce, Inc.</p>

        {/* Scroll up */}
        <p
          className="md:text-base 2xl:text-lg text-sm flex text-black-200 
          cursor-pointer opacity-[0.7] hover:opacity-[0.9]"
        >
          <AnchorLink href="#header">
            <span className="md:mr-[3px] mr-0"> Scroll to top </span>
          </AnchorLink>
          <div className="lg:mt-0 mt-[-3px] rotate-[180deg]">
            <Lottie
              className="w-[30px] lg:scale-[1] scale-[0.5] h-[30px]"
              animationData={arrowup}
            />
          </div>
        </p>
      </div>
    </footer>
  )
}
