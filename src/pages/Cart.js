import React, { useContext, useState } from 'react'

import PagesContent from '../components/PagesContent'

import cartLottie from '../components/lottie/cartLottie.json'

import Lottie from 'lottie-react'

import { productContext } from '../App'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import OrderSummary from '../components/cart/OrderSummary'

import Snackbar from '@mui/material/Snackbar'

import MuiAlert from '@mui/material/Alert'

import IconButton from '@mui/material/IconButton'

import CloseIcon from '@mui/icons-material/Close'

import { Link } from 'react-router-dom'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function Cart({ handleSavelater, currentUser }) {
  const { counter, setConter, cart, currency, setCart } = useContext(
    productContext,
  )
  const [open, setOpen] = useState(false)
  const [savelaterOpen, setSavelaterOpen] = useState(false)

  const handleRemoveItem = (id) => {
    const arr = cart.filter((item) => item.id !== id)
    setCart(arr)
    setConter((count) => count - 1)
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const Savelater_snackbar = (
    <>
      <div className="flex flex-col">
        <span className="text-sm font-out-fit">
          You need to be loged in to save
          <br /> an item
        </span>
        <Link to="/account/login">
          <button
            className="border border-yellow outline-none bg-transparent
          w-[120px] mt-1 rounded-md py-[4px] text-xs font-out-fit 
         hover:bg-darkYellow hover:text-black-300"
          >
            {' '}
            Click here to login{' '}
          </button>
        </Link>
      </div>
    </>
  )
  const handleSaveLater = (item) => {
    setSavelaterOpen(true)
    handleSavelater(item)
  }
  const handleSavelaterClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSavelaterOpen(false)
  }
  const savelaterAction = (
    <React.Fragment>
      <IconButton
        size="medium"
        aria-label="close"
        color="inherit"
        onClick={handleSavelaterClose}
      >
        <CloseIcon fontSize="medium" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <>
      {counter == 0 ? (
        <PagesContent
          image={
            <div className="relative ">
              <Lottie
                className="lg:w-[120px] lg:h-[120px] 2xl:w-[150px] 2xl:h-[150px]
                 w-[100px] h-[100px]"
                animationData={cartLottie}
              />
            </div>
          }
          productstatus="Your cart is empty"
          productInfo="You have not added any item to your cart."
          page_heading="Shopping cart"
          cart_true="true"
          is_cartEmpty="true"
          is_back="true"
        />
      ) : (
        <PagesContent
          cart_true="true"
          is_back="true"
          productAdded={
            <>
              <div
                className="2xl:text-lg lg:grid-cols-3 md:text-lg md:top-7 md:items-start lg:gap-4 
                grid grid-cols-1 text-black-200 justify-center items-center
                text-base relative top-6 pb-5 w-[100%]"
              >
                <div
                  className="lg:col-span-2 col-span-1 xl:rounded-2xl
                 bg-white-300 w-full max-w-[100%] rounded-lg"
                >
                  <div
                    className="lg:px-3 xl:px-4 grid grid-cols-8 xl:rounded-t-2xl
                    px-3.5 bg-stone-700 py-3.5 rounded-t-lg shadow-sm"
                  >
                    <div
                      className="md:col-span-5
                     col-span-4 flex items-center gap-x-2"
                    >
                      <ShoppingCartOutlinedIcon fontSize="large" />
                      <h4> My Cart </h4>
                    </div>
                    <h4 className="md:flex hidden col-span-2">Price</h4>
                    <h4 className="md:col-span-1 col-span-4 flex justify-end">
                      Action
                    </h4>
                  </div>
                  {/* Cart Items */}
                  {cart.map((item) => (
                    <div
                      className="xl:px-4 md:py-6
                       grid grid-cols-8 px-3.5 py-5.5 border-t border-stone-700"
                    >
                      {/* image */}
                      <div
                        className="md:col-span-5 sm:gap-3.5 md:gap-4
                       col-span-4 flex gap-3"
                      >
                        <img
                          src={item.images[0]}
                          className="sm:w-7.1 sm:h-7 md:w-7 md:h-7 xl:w-[120px] xl:h-[100px]
                           2xl:w-[140px] 2xl:h-[120px]
                          w-[65px] h-7 rounded-md object-cover"
                          alt=""
                        />
                        <div>
                          <h4 className="md:text-base 2xl:text-lg font-medium text-xs">
                            {' '}
                            {item.title}{' '}
                          </h4>

                          <p
                            className="lg:text-xxs xl:text-sm 2xl:text-base md:mt-2
                           text-blue text-xs mt-1"
                          >
                            {' '}
                            Mobuy store
                          </p>
                          <p className="md:hidden font-medium text-sm flex mt-1">
                            {' '}
                            {currency}
                            {item.price}.00{' '}
                          </p>
                        </div>
                      </div>
                      {/* Price */}
                      <div className="md:flex hidden col-span-2">
                        <h4 className="2xl:text-2xl xl:text-xl lg:text-lg opacity-[0.8] font-medium">
                          {currency}
                          {item.price}.00
                        </h4>
                        <p
                          className="text-black-200 opacity-[0.7]
                            font-regular text-sm"
                        >
                          {' '}
                        </p>
                      </div>
                      {/* Action */}
                      <div
                        className="2xl:text-base md:col-span-1 xl:left-3 lg:items-start md:text-sm
                        lg:text-xxs xl:text-sm 
                        col-span-4 text-[12px] relative 
                      text-stone-300 flex flex-col items-end gap-y-2"
                      >
                        {/* Remove item */}
                        <p
                          className="cursor-pointer hover:text-blue 
                          flex justify-center items-center"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <DeleteOutlinedIcon
                            sx={{ width: '20px', height: '20px' }}
                            className="lg:scale-[0.8] xl:scale-[1] xl:mr-1 sm:scale-[0.8]
                             scale-[0.7]"
                          />
                          Remove
                        </p>
                        {/* Save Item */}
                        <p
                          className="cursor-pointer flex justify-center items-center
                            hover:text-blue "
                          onClick={() => handleSaveLater(item)}
                        >
                          {' '}
                          <FavoriteBorderOutlinedIcon
                            sx={{ width: '19px', height: '19px' }}
                            className="lg:scale-[0.8] xl:scale-[1] xl:mr-1 sm:scale-[0.8]
                             scale-[0.7]"
                          />
                          Save Item
                        </p>
                      </div>
                      {/* Action ends */}
                    </div>
                  ))}
                  {/* Cart Items ends*/}
                </div>

                <OrderSummary
                  counter={counter}
                  currency={currency}
                  cart={cart}
                  currentUser={currentUser}
                />
              </div>
              {/* Cart */}
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                sx={{ zIndex: '30px' }}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: '290px', opacity: '0.1' }}
                >
                  <span className="text-sm font-out-fit">
                    Product has been removed from cart
                  </span>
                </Alert>
              </Snackbar>

              {/* Save items */}
              {currentUser ? (
                <Snackbar
                  open={savelaterOpen}
                  autoHideDuration={6000}
                  onClose={handleSavelaterClose}
                  sx={{ zIndex: '30px' }}
                >
                  <Alert
                    onClose={handleSavelaterClose}
                    severity="success"
                    sx={{ width: '290px', opacity: '0.1' }}
                  >
                    <span className="text-sm font-out-fit">
                      Product added to saved items
                    </span>
                    <button
                      className="border border-white-100 outline-none bg-transparent
                      w-[80px] mt-1 rounded-md py-[1px] text-xs font-out-fit 
                      hover:bg-darkYellow hover:border-yellow tracking-wider"
                    >
                      {' '}
                      View Items
                    </button>
                  </Alert>
                </Snackbar>
              ) : (
                <Snackbar
                  sx={{ zIndex: '30px' }}
                  open={savelaterOpen}
                  autoHideDuration={6000}
                  onClose={handleSavelaterClose}
                  message={Savelater_snackbar}
                  action={savelaterAction}
                />
              )}
            </>
          }
          page_heading="Shopping cart"
        />
      )}
    </>
  )
}
