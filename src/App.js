import { useState, createContext } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.css'

import Home from './pages/Home'

import Cart from './pages/Cart'

import SaveLater from './pages/SaveLater'

export const productContext = createContext()

export const homeContext = createContext()

function App() {
  const [counter, setConter] = useState(0)
  const [currency, setCurrency] = useState('$')
  const [searchItem, setSearchItem] = useState('')
  const [cart, setCart] = useState([])

  const handleCounter = () => {
    setConter((count) => count + 1)
  }
  const handleCurrency = (e) => {}

  const handleCart = (item) => {
    if (cart.indexOf(item) !== -1) return
    setCart([...cart, item])
  }

  return (
    <Router>
      <productContext.Provider
        value={{
          handleCounter,
          handleCart,
          cart,
          setCart,
          counter,
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
        </Switch>
      </productContext.Provider>
    </Router>
  )
}

export default App
