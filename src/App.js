import { useState, createContext, useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './input.css'

import Home from './pages/Home'

import Cart from './pages/Cart'

import SaveLater from './pages/SaveLater'

import Checkout from './pages/Checkout'

import Login from './pages/Login'

export const productContext = createContext()

export const homeContext = createContext()

function App() {
  const [counter, setConter] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('countItem'))
    return saved || 0
  })
  const [currency, setCurrency] = useState('$')
  const [searchItem, setSearchItem] = useState('')
  const [cart, setCart] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('cart'))
    return initialValue || ''
  })

  const handleCounter = () => {
    setConter((count) => count + 1)
  }
  // ₦
  const handleCurrency = (e) => {}

  const handleCart = (item) => {
    if (cart.indexOf(item) !== -1) return
    setCart([...cart, item])
  }
  useEffect(() => {
    localStorage.setItem('countItem', JSON.stringify(counter))
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [counter])

  // localStorage.clear()

  return (
    <Router>
      <productContext.Provider
        value={{
          handleCounter,
          handleCart,
          cart,
          setCart,
          counter,
          setConter,
          currency,
          searchItem,
          setSearchItem,
        }}
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/saveLater">
            <SaveLater />
          </Route>
          <Route path="/checkout/completeOrder">
            <Checkout />
          </Route>
          <Route>
            <Login path="/account/login" />
          </Route>
        </Switch>
      </productContext.Provider>
    </Router>
  )
}

export default App
