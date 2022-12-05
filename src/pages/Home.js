import React from 'react'

import Navigation from '../components/navigation/Navigation'

import Tabs from '../components/tabs/Tabs'

export default function Home() {
  return (
    <div>
      <header className="px-7">
        <Navigation />
        <Tabs />
      </header>
    </div>
  )
}
