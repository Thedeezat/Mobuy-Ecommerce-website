import { useState, createContext, useEffect, useRef } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AuthContext } from './components/Auth/AuthContext'

import './input.css'

import Home from './pages/Home'

import Cart from './pages/Cart'

import SaveLater from './pages/SaveLater'

import Checkout from './pages/Checkout'

import Login from './pages/Login'

import Signup from './pages/Signup'

import ForgotPassword from './pages/ForgotPassword'

import Profile from './pages/Profile'

export const productContext = createContext()

function App() {
  const { currentUser } = AuthContext()
  // Local storage
  const [firstName, setFirstName] = useState(() => {
    const savedItem = localStorage.getItem('firstName')
    const parsedItem = JSON.parse(savedItem)
    return parsedItem || ''
  })
  const [lastName, setLastName] = useState(() => {
    const savedName = localStorage.getItem('lastName')
    const parsedName = JSON.parse(savedName)
    return parsedName || ''
  })

  const [counter, setConter] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('countItem'))
    return saved || 0
  })
  const [cart, setCart] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('cart'))
    return initialValue || ''
  })
  const [savelater, setSavelater] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('savelater'))
    return initialValue || ''
  })

  const [currency, setCurrency] = useState('$')
  const [searchItem, setSearchItem] = useState('')
  const [passwordType, setPasswordType] = useState('password')
  const [passwordInput, setPasswordInput] = useState('')
  const [visibilityOn, setVisibilityOn] = useState(true)
  const [cartLoading, setCartLoading] = useState(false)
  const [disable, setDisabled] = useState(false)

  const handleCounter = () => {
    setConter((count) => count + 1)
  }
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
    localStorage.setItem('savelater', JSON.stringify(savelater))
    localStorage.setItem('firstName', JSON.stringify(firstName))
    localStorage.setItem('lastName', JSON.stringify(lastName))
  }, [counter, savelater, firstName, lastName, cart])

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
    handleSavelater,
    cart,
    setCart,
    counter,
    setConter,
    currency,
    searchItem,
    setSearchItem,
    currentUser,
    firstName,
    cartLoading,
  }
  return (
    <Router>
      <productContext.Provider value={value}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart handleSavelater={handleSavelater} currentUser={currentUser} />
          </Route>
          <Route path="/saveLater">
            <SaveLater
              savelater={savelater}
              setSavelater={setSavelater}
              currency={currency}
              handleCart={handleCart}
            />
          </Route>
          <Route path="/account/signup">
            <Signup
              visibilityOn={visibilityOn}
              passwordInput={passwordInput}
              passwordType={passwordType}
              handlePasswordChange={handlePasswordChange}
              handlePasswordShow={handlePasswordShow}
              setFirstName={setFirstName}
              firstName={firstName}
              setLastName={setLastName}
              lastName={lastName}
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
          <Route path="/profile">
            <Profile
              currentUser={currentUser}
              first_name={firstName}
              OnsetFirstName={setFirstName}
              last_name={lastName}
              OnsetLastName={setLastName}
            />
          </Route>
        </Switch>
      </productContext.Provider>
    </Router>
  )
}

export default App
