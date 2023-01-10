import React, { useContext, useEffect } from 'react'

import Navigation from '../components/navigation/Navigation'

import Tabs from '../components/tabs/Tabs'

import { productContext } from '../App'

import Footer from '../components/footer/Footer'

export default function Home() {
  const { counter, currency, firstName } = useContext(productContext)

  return (
    <>
      <div className="overflow-hidden">
        <header className="px-4 sm:px-5 md:px-7">
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
