import React from 'react'

import PagesContent from '../components/PagesContent'

import box from '../components/lottie/box.json'

import Lottie from 'lottie-react'

export default function SaveLater() {
  return (
    <>
      <PagesContent
        image={
          <div className="w-[170px] h-[170px]">
            <Lottie animationData={box} />
          </div>
        }
        productstatus="No saved item"
        productInfo="Continue shopping and save an item."
        page_heading="Saved items"
        texts_style="relative top-[-25px]"
        savelater_true="true"
        is_cartEmpty="true"
      />
    </>
  )
}
