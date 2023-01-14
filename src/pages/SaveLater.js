import React, { useState } from 'react'

import PagesContent from '../components/PagesContent'

import box from '../components/lottie/box.json'

import Lottie from 'lottie-react'

import { CustomSnackbar } from '../components/Snackbar'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

import Rating from '@mui/material/Rating'

import Snackbar from '@mui/material/Snackbar'

import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function SaveLater({
  setSavelater,
  savelater,
  currency,
  handleCart,
  currentUser,
  savedCounter,
  setSavedCounter,
  setConter,
  cart,
}) {
  const [openSnacbar, setOpenSnacbar] = useState('')
  const [cartAdded, setCartAdded] = useState(false)

  const handleRemoveItem = (id) => {
    const arr = savelater.filter((item) => item.id !== id)
    setSavelater(arr)
    setOpenSnacbar(true)

    setSavedCounter((count) => count - 1)
  }
  const handleSavelaterClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnacbar(false)
  }

  const handeleSaveCart = (item) => {
    handleCart(item)

    const ProductExist = cart.find((element) => element.id === item.id)
    if (ProductExist) {
      setCartAdded(false)
    } else {
      setConter((count) => count + 1)
      setCartAdded(true)
    }
  }

  return (
    <>
      {savelater == 0 || !currentUser ? (
        <PagesContent
          image={
            <div className="">
              <Lottie
                className="lg:w-[170px] lg:h-[170px] 2xl:w-[200px] 2xl:h-[200px]
                 w-[140px] h-[140px]"
                animationData={box}
              />
            </div>
          }
          productstatus="No saved item"
          productInfo="Continue shopping and save an item."
          page_heading="Saved items"
          texts_style="relative top-[-25px]"
          savelater_true="true"
          is_cartEmpty="true"
          is_back="true"
        />
      ) : (
        <PagesContent
          savelater_true="true"
          is_back="true"
          page_heading="Saved items"
          productAdded={
            <>
              <div
                className="xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 md:gap-4 2xl:grid-cols-6
                relative mb-7.1 top-[7vh] grid grid-cols-2 gap-2 text-black-200"
              >
                {savelater.map((item) => (
                  <div
                    className={`pb-3 w-full bg-stone-500 
                    rounded-xl rounded-t-xl overflow-hidden `}
                  >
                    {/* Savelater */}
                    <div className="relative">
                      {' '}
                      <div
                        className=" md:w-[28px] md:h-[28px] 
                        absolute bg-stone-200 flex opacity-[0.8]
                        rounded-full w-[25px] h-[25px] shadow-md group
                        items-center justify-center right-2 top-2 cursor-pointer
                        hover:bg-stone-500"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FavoriteBorderOutlinedIcon
                          className="md:scale-[1]
                          text-white-300 group-hover:text-charcoal scale-[0.9]"
                        />
                      </div>
                    </div>
                    {/* Image */}
                    <img
                      src={item.images[0]}
                      className="md:h-[180px] md:rounded-xl
                      h-[120px] w-full object-cover rounded-xl
                    bg-stone-100 border-none"
                      alt=""
                    />{' '}
                    {/* Description */}
                    <div className="pt-3.5 px-3">
                      <h3
                        className="md:text-sm 2xl:text-base 2xl:h-4
                        text-xs h-3.5 overflow-hidden"
                      >
                        {' '}
                        {item.title}{' '}
                      </h3>
                      {/* price */}
                      <div
                        className="md:pt-3 
                        flex items-center justify-between
                        pt-2"
                      >
                        <h3 className="md:text-base 2xl:text-tiny text-[15px] text-black-100">
                          {' '}
                          {currency}
                          {item.price}
                        </h3>
                        <h4
                          className="line-through tracking-wider 
                          text-sm 2xl:text-base opacity-[0.8]"
                        >
                          {' '}
                          {currency}
                          {item.price + 70}
                        </h4>
                      </div>
                      {/* Rating */}
                      <div className="md:block hidden">
                        <Rating
                          name="read-only"
                          className="2xl:scale-[1.1] pt-1"
                          value="4"
                          readOnly
                        />
                      </div>

                      {/* Add to cart */}
                      <CustomSnackbar
                        children={
                          <button
                            className="md:h-[36px] md:rounded-xl md:mt-3
                            w-[100%] h-[30px] rounded-lg bg-transparent
                            text-black-200 hover:bg-lightYellow font-out-fit
                            border border-darkYellow mt-3"
                            onClick={() => handeleSaveCart(item)}
                          >
                            {' '}
                            <span className="md:text-[13px] 2xl:text-[14px] text-[11px]">
                              {' '}
                              Add To Cart{' '}
                            </span>
                          </button>
                        }
                        message={
                          <span>
                            {cartAdded
                              ? 'Product has been added to cart'
                              : 'Product is already in cart'}
                          </span>
                        }
                        button_text=" View Cart"
                        success="True"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          }
        />
      )}

      {/* remove item */}
      <Snackbar
        open={openSnacbar}
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
            Product removed from <br /> saved item
          </span>
        </Alert>
      </Snackbar>
    </>
  )
}
