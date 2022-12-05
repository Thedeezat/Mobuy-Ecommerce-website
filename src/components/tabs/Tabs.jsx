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

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <>
      <section className="pt-4 flex items-center gap-6">
        {/* All */}
        <TabItem
          product="All product"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          id="tab1"
          icon={
            <CardGiftcardRoundedIcon
              fontSize="large"
              className="text-yellow mb-1"
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
            <CheckroomRoundedIcon
              fontSize="large"
              className="text-yellow mb-1"
            />
          }
        />
        {/* Furnitures */}
        <TabItem
          product="Furnitures"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          id="tab3"
          icon={
            <KingBedRoundedIcon fontSize="large" className="text-yellow mb-1" />
          }
        />
        {/* Electonics */}
        <TabItem
          product="Electonics"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          id="tab4"
          icon={
            <CableRoundedIcon fontSize="large" className="text-yellow mb-1" />
          }
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
              className="text-yellow mb-1"
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
              className="text-yellow mb-1"
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
              className="text-yellow mb-1"
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
          <p>Tab 2 works!</p>
        </TabContent>
        {/* 3 Tab */}
        <TabContent id="tab3" activeTab={activeTab}>
          <p>Tab 3 works!</p>
        </TabContent>
        {/* 4 Tab */}
        <TabContent id="tab4" activeTab={activeTab}>
          <p>Tab 4 works!</p>
        </TabContent>
        {/* 5 Tab */}
        <TabContent id="tab5" activeTab={activeTab}>
          <p>Tab 5 works!</p>
        </TabContent>
        {/* 6 Tab */}
        <TabContent id="tab6" activeTab={activeTab}>
          <p>Tab 6 works!</p>
        </TabContent>
        {/* 7 Tab */}
        <TabContent id="tab7" activeTab={activeTab}>
          <p>Tab 7 works!</p>
        </TabContent>
      </div>
    </>
  )
}
