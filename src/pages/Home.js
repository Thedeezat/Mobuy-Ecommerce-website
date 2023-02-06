import React, { useContext } from 'react'

import Navigation from '../components/navigation/Navigation'

import Tabs from '../components/tabs/Tabs'

import { productContext } from '../App'

import Footer from '../components/footer/Footer'

export default function Home() {
  const { counter, currency, firstName } = useContext(productContext)

  return (
    <>
      <div className="overflow-hidden">
        <header
          className="px-3.5 sm:px-5 lg:px-6 xl:px-7 2xl:px-7.1"
          id="header"
        >
          <Navigation
            counter={counter}
            currency={currency}
            firstName={firstName}
          />
          <Tabs />
        </header>
        <Footer />
      </div>
    </>
  )
}
