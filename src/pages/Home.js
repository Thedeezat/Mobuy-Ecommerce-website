import React, { useContext } from 'react'

import Navigation from '../components/navigation/Navigation'

import Tabs from '../components/tabs/Tabs'

import { productContext } from '../App'

import Footer from '../components/footer/Footer'

export default function Home() {
  const { counter, currency } = useContext(productContext)
  return (
    <div>
      <header className="px-7">
        <Navigation counter={counter} currency={currency} />
        <Tabs />
      </header>
      <Footer />
    </div>
  )
}
