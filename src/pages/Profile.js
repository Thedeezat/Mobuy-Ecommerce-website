import React, { useState } from 'react'

import PagesContent from '../components/PagesContent'

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined'

import ProfileTab from '../components/profile/ProfileTab'

import ProfileContent from '../components/profile/ProfileContent'

import AccountInfo from '../components/profile/AccountInfo'

import DeliveryAdress from '../components/profile/DeliveryAdress'

import OrderHistory from '../components/profile/OrderHistory'

import Wallet from '../components/profile/Wallet'

export default function Profile({
  currentUser,
  first_name,
  OnsetFirstName,
  last_name,
  OnsetLastName,
  setDeliveryAddress,
  orderHistory,
  setOrderHistory,
}) {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <PagesContent
      page_heading="Account Information"
      is_back="true"
      is_profile={true}
      profile_style="w-7.6"
      productAdded={
        <>
          <div
            className="md:grid-cols-4 md:grid-rows-none md:gap-3 lg:gap-4
            xl:gap-5 md:h-full md:mb-1
            grid-cols-none grid-rows-4 gap-0 w-full mt-6 text-black-200 grid
            h-screen mb-7.8"
          >
            {/* Dashboard */}
            <div
              className="md:col-span-1 md:grid-cols-1 sm:max-h-[150px] md:max-h-[350px] 2xl:max-h-[420px]
              md:rounded-xl lg:max-h-[350px] md:justify-center sm:grid-cols-3 md:grid-rows-none
              bg-stone-500 rounded-lg grid grid-cols-2 max-h-[170px]
              col-span-0 w-full grid-rows-1"
            >
              {/* Profile */}
              <div
                className="md:border-b md:px-3 lg:py-4 md:border-r-0 
                border-r border-stone-600 py-3.5 px-3 flex"
              >
                <AccountCircleOutlinedIcon
                  fontSize="large"
                  className="md:mr-2 md:scale-[1] md:mt-[2px]
                   scale-[0.9] mr-1 mt-[0]"
                />
                <div>
                  <h3 className="2xl:text-2xl md:text-base lg:text-xl text-sm pb-2">
                    My Profile
                  </h3>
                  <ProfileTab
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    children="Account Information"
                    extraStyle="md:mb-1 mb-2"
                    id="tab1"
                  />
                  <ProfileTab
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    children=" Delivery Address"
                    id="tab2"
                  />
                </div>
              </div>
              {/* My orders */}
              <div
                className="md:border-b md:px-4 md:items-start
                border-stone-600 py-3.5 px-3 flex flex-col"
              >
                {/* order */}
                <div className="flex">
                  <ShoppingBagOutlinedIcon
                    fontSize="large"
                    className="md:mr-2 md:scale-[1] md:mt-[2px]
                    scale-[0.9] mr-1 mt-[0]"
                  />
                  <div>
                    <h3 className="2xl:text-2xl md:text-base lg:text-xl text-sm pb-2">
                      {' '}
                      My Orders{' '}
                    </h3>
                    <ProfileTab
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                      children="Order History"
                      id="tab3"
                    />
                  </div>
                </div>
                {/* wallet */}
                <div className="flex mt-3 sm:hidden">
                  <WalletOutlinedIcon
                    fontSize="large"
                    className=" scale-[0.9] mr-1 mt-[0]"
                  />
                  <div>
                    <h3 className="text-sm pb-2 max-[320px]:hidden">
                      {' '}
                      My Wallet{' '}
                    </h3>
                    <ProfileTab
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                      children="Wallet"
                      id="tab4"
                    />
                  </div>
                </div>
                {/* end of wallet */}
              </div>
              {/* My Wallet */}
              <div
                className="md:px-4 md:border-l-0 sm:flex
                border-l border-stone-600 py-3.5 px-3 hidden items-start"
              >
                <WalletOutlinedIcon
                  fontSize="large"
                  className="md:mr-2 md:scale-[1] md:mt-[2px]
                  scale-[0.9] mr-1 mt-[0]"
                />
                <div>
                  <h3 className="2xl:text-2xl md:text-base lg:text-xl text-sm pb-2">
                    {' '}
                    My Wallet{' '}
                  </h3>
                  <ProfileTab
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    children="Wallet"
                    id="tab4"
                  />
                </div>
              </div>
            </div>

            <div
              className="md:col-span-3  md:mt-0 md:grid-rows-none col-span-0 relative grid-rows-3
            mt-5"
            >
              {/* Tab contents */}
              <ProfileContent id="tab1" activeTab={activeTab}>
                <AccountInfo
                  first_name={first_name}
                  OnsetFirstName={OnsetFirstName}
                  last_name={last_name}
                  OnsetLastName={OnsetLastName}
                  currentUser={currentUser}
                />
              </ProfileContent>

              {/* Delivery */}
              <ProfileContent id="tab2" activeTab={activeTab}>
                <DeliveryAdress
                  first_name={first_name}
                  last_name={last_name}
                  setDeliveryAddress={setDeliveryAddress}
                />
              </ProfileContent>

              {/* Order history  */}
              <ProfileContent id="tab3" activeTab={activeTab}>
                <OrderHistory orderHistory={orderHistory} />
              </ProfileContent>

              {/* wallet */}
              <ProfileContent id="tab4" activeTab={activeTab}>
                <Wallet />
              </ProfileContent>
            </div>
          </div>
        </>
      }
    />
  )
}
