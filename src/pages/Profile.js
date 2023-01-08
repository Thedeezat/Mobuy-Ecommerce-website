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
}) {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <PagesContent
      page_heading="Account Information"
      is_back="true"
      profile_style="w-7.6"
      productAdded={
        <>
          <div className="mt-6 text-black-200  flex gap-x-6">
            {/* Dashboard */}
            <div
              className="w-7.8 h-7.9 bg-stone-500 rounded-xl
             flex flex-col justify-center"
            >
              {/* Profile */}
              <div
                className="border-b border-stone-600 py-3.5 px-4 flex
              items-start"
              >
                <AccountCircleOutlinedIcon
                  fontSize="large"
                  className="mr-2 mt-[2px]"
                />
                <div>
                  <h3 className="text-xl pb-2">My Profile</h3>
                  <ProfileTab
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    children="Account Information"
                    extraStyle="mb-1"
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
                className="border-b border-stone-600 px-4 py-3.5 flex
                items-start"
              >
                <ShoppingBagOutlinedIcon
                  fontSize="large"
                  className="mr-2 mt-[2px]"
                />
                <div>
                  <h3 className="text-xl pb-2"> My Orders </h3>
                  <ProfileTab
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    children="Order History"
                    id="tab3"
                  />
                </div>
              </div>
              {/* My Wallet */}
              <div
                className="border-stone-600 px-4 py-3.5 flex
                items-start"
              >
                <WalletOutlinedIcon
                  fontSize="large"
                  className="mr-2 mt-[2px]"
                />
                <div>
                  <h3 className="text-xl pb-2"> My Wallet </h3>
                  <ProfileTab
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    children="Wallet"
                    id="tab4"
                  />
                </div>
              </div>
            </div>

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
              <OrderHistory />
            </ProfileContent>

            {/* wallet */}
            <ProfileContent id="tab4" activeTab={activeTab}>
              <Wallet />
            </ProfileContent>
          </div>
        </>
      }
    />
  )
}
