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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function Cart() {
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
    <div className="flex flex-col">
      <span className="text-sm font-out-fit">
        You need to be loged in to save
        <br /> an item
      </span>
      <button
        className="border border-yellow outline-none bg-transparent
        w-[120px] mt-1 rounded-md py-[4px] text-xs font-out-fit 
        hover:bg-darkYellow hover:text-black-300"
      >
        {' '}
        Click here to login{' '}
      </button>
    </div>
  )
  const handleSaveLater = () => {
    setSavelaterOpen(true)
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
            <div className="w-[120px] h-[120px] relative ">
              <Lottie animationData={cartLottie} />
            </div>
          }
          productstatus="Your cart is empty"
          productInfo="You have not added any item to your cart."
          page_heading="Shopping cart"
          cart_true="true"
          is_cartEmpty="true"
        />
      ) : (
        <PagesContent
          cart_true="true"
          productAdded={
            <>
              <div
                className="flex text-black-200 justify-between items-start 
                text-lg relative top-7 pb-5"
              >
                <div className="bg-white-300 w-13 rounded-2xl">
                  {/* Heading */}
                  <div
                    className="flex justify-between items-center
                    px-4 bg-stone-400 py-3 rounded-t-2xl"
                  >
                    <div className="flex items-center gap-x-2">
                      <ShoppingCartOutlinedIcon fontSize="large" />
                      <h4> My Cart </h4>
                    </div>
                    <div className="flex gap-[210px]">
                      <h4>Price</h4>
                      <h4>Action</h4>
                    </div>
                  </div>
                  {/* Cart Items */}
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex py-6 justify-between px-4
                       border-b border-stone-400"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.images[0]}
                          className="w-7 h-7 rounded-md object-cover"
                          alt=""
                        />
                        <div>
                          <h4 className="font-medium text-base">
                            {' '}
                            {item.title}{' '}
                          </h4>

                          <p className="text-blue text-sm mt-2"> Mobuy store</p>
                        </div>
                      </div>
                      {/* Action / Price */}
                      <div className="flex gap-[120px]">
                        <div>
                          <h4 className="text-xl opacity-[0.8] font-medium">
                            {currency}
                            {item.price}.00
                          </h4>
                          <p
                            className="text-black-200 opacity-[0.7]
                            font-regular text-sm"
                          >
                            {' '}
                            {/* $428 x 1{' '} */}
                          </p>
                        </div>
                        {/* Action */}
                        <div className="text-base text-stone-300 flex flex-col gap-y-2">
                          {/* Remove item */}
                          <p
                            className="cursor-pointer hover:text-blue"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <DeleteOutlinedIcon
                              sx={{ width: '22px', height: '22px' }}
                              className="mr-1"
                            />
                            Remove Item
                          </p>
                          {/* Save Item */}

                          <p
                            className="cursor-pointer ml-[3px] hover:text-blue"
                            onClick={handleSaveLater}
                          >
                            {' '}
                            <FavoriteBorderOutlinedIcon
                              sx={{ width: '19px', height: '19px' }}
                              className="mr-1"
                            />
                            Save Item
                          </p>
                        </div>
                        {/* Action ends */}
                      </div>
                    </div>
                  ))}
                  {/* Cart Items ends*/}
                </div>
                <OrderSummary
                  counter={counter}
                  currency={currency}
                  cart={cart}
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
                    Item has been removed from cart
                  </span>
                </Alert>
              </Snackbar>

              {/* Save items */}
              <Snackbar
                sx={{ zIndex: '30px' }}
                open={savelaterOpen}
                autoHideDuration={6000}
                onClose={handleSavelaterClose}
                message={Savelater_snackbar}
                action={savelaterAction}
              />
            </>
          }
          page_heading="Shopping cart"
        />
      )}
    </>
  )
}
