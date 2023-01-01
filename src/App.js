import { useState, createContext, useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './input.css'

import Home from './pages/Home'

import Cart from './pages/Cart'

import SaveLater from './pages/SaveLater'

import Checkout from './pages/Checkout'

import Login from './pages/Login'

import Signup from './pages/Signup'

import ForgotPassword from './pages/ForgotPassword'

export const productContext = createContext()

function App() {
  const [counter, setConter] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('countItem'))
    return saved || 0
  })
  const [currency, setCurrency] = useState('$')
  const [searchItem, setSearchItem] = useState('')

  const [passwordType, setPasswordType] = useState('password')
  const [passwordInput, setPasswordInput] = useState('')
  const [visibilityOn, setVisibilityOn] = useState(true)

  const [cart, setCart] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('cart'))
    return initialValue || ''
  })
  const [savelater, setSavelater] = useState({})

  const handleCounter = () => {
    setConter((count) => count + 1)
  }
  // ₦
  const handleCurrency = (e) => {}

  const handleSavelater = (item) => {
    if (savelater.indexOf(item) !== -1) return
    setSavelater([...savelater, item])
  }
  const handleCart = (item) => {
    if (cart.indexOf(item) !== -1) return
    setCart([...cart, item])
  }
  useEffect(() => {
    localStorage.setItem('countItem', JSON.stringify(counter))
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [counter])

  // password
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value)
  }
  const handlePasswordShow = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      setVisibilityOn(false)
      return
    } else {
      setPasswordType('password')
      setVisibilityOn(true)
    }
  }

  const value = {
    handleCounter,
    handleCart,
    cart,
    setCart,
    counter,
    setConter,
    currency,
    searchItem,
    setSearchItem,
  }
  return (
    <Router>
      <productContext.Provider value={value}>
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
          <Route path="/account/signup">
            <Signup
              visibilityOn={visibilityOn}
              passwordInput={passwordInput}
              passwordType={passwordType}
              handlePasswordChange={handlePasswordChange}
              handlePasswordShow={handlePasswordShow}
            />
          </Route>
          <Route path="/account/login">
            <Login
              visibilityOn={visibilityOn}
              passwordInput={passwordInput}
              passwordType={passwordType}
              handlePasswordChange={handlePasswordChange}
              handlePasswordShow={handlePasswordShow}
            />
          </Route>
          <Route path="/checkout/completeOrder">
            <Checkout />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
        </Switch>
      </productContext.Provider>
    </Router>
  )
}

export default App
