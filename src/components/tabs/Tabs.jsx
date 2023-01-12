import React, { useState } from 'react'

import TabItem from './TabItem'

import CheckroomRoundedIcon from '@mui/icons-material/CheckroomRounded'

import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded'

import KingBedRoundedIcon from '@mui/icons-material/KingBedRounded'

import CableRoundedIcon from '@mui/icons-material/CableRounded'

import BabyChangingStationRoundedIcon from '@mui/icons-material/BabyChangingStationRounded'

import SoupKitchenRoundedIcon from '@mui/icons-material/SoupKitchenRounded'

import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded'

import TabContent from './TabContent'

import AllCategory from '../product/categories/AllCategory'

import Clothes from '../product/categories/Clothes'

import Furniture from '../product/categories/Furniture'

import Electronics from '../product/categories/Electronics'

import Babies from '../product/categories/Babies'

import Kitchen from '../product/categories/Kitchen'

import Others from '../product/categories/Others'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1')

  const categoryIcons = 'md:scale-[1] scale-[0.7] text-yellow mb-1'

  return (
    <>
      <section
        className="md:gap-6 md:over-hidden md:w-full
        pt-4 flex items-center gap-3.5 w-[90vw] snap-x scroll-smooth 
        whitespace-nowrap overflow-auto scrollbar-hide pr-2"
      >
        {/* All */}
        <TabItem
          product="All product"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          id="tab1"
          icon={
            <CardGiftcardRoundedIcon
              fontSize="large"
              className={categoryIcons}
            />
          }
        />
        {/* Clothes */}
        <TabItem
          product="Clothes"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          id="tab2"
          icon={
            <CheckroomRoundedIcon fontSize="large" className={categoryIcons} />
          }
        />
        {/* Furnitures */}
        <TabItem
          product="Furnitures"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          id="tab3"
          icon={
            <KingBedRoundedIcon fontSize="large" className={categoryIcons} />
          }
        />
        {/* Electonics */}
        <TabItem
          product="Electonics"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          id="tab4"
          icon={<CableRoundedIcon fontSize="large" className={categoryIcons} />}
        />
        {/* Kids */}
        <TabItem
          product="Babies"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          id="tab5"
          icon={
            <BabyChangingStationRoundedIcon
              fontSize="large"
              className={categoryIcons}
            />
          }
        />
        {/* Kitchen */}
        <TabItem
          product="Kitchen"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          id="tab6"
          icon={
            <SoupKitchenRoundedIcon
              fontSize="large"
              className={categoryIcons}
            />
          }
        />
        {/* Other */}
        <TabItem
          product="Other"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          id="tab7"
          icon={
            <ShoppingBasketRoundedIcon
              fontSize="large"
              className={categoryIcons}
            />
          }
        />
      </section>

      {/* Tab Contents */}
      <div>
        {/* 1 tab */}
        <TabContent id="tab1" activeTab={activeTab}>
          <AllCategory />
        </TabContent>
        {/* 2 Tab */}
        <TabContent id="tab2" activeTab={activeTab}>
          <Clothes />
        </TabContent>
        {/* 3 Tab */}
        <TabContent id="tab3" activeTab={activeTab}>
          <Furniture />
        </TabContent>
        {/* 4 Tab */}
        <TabContent id="tab4" activeTab={activeTab}>
          <Electronics />
        </TabContent>
        {/* 5 Tab */}
        <TabContent id="tab5" activeTab={activeTab}>
          <Babies />
        </TabContent>
        {/* 6 Tab */}
        <TabContent id="tab6" activeTab={activeTab}>
          <Kitchen />
        </TabContent>
        {/* 7 Tab */}
        <TabContent id="tab7" activeTab={activeTab}>
          <Others />
        </TabContent>
      </div>
    </>
  )
}
