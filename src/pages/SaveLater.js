import React, { useState } from 'react'

import PagesContent from '../components/PagesContent'

import box from '../components/lottie/box.json'

import Lottie from 'lottie-react'

import { CustomSnackbar } from '../components/Snackbar'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

import Rating from '@mui/material/Rating'

import Button from '@mui/material/Button'

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
}) {
  const [openSnacbar, setOpenSnacbar] = useState('')

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
  return (
    <>
      {savelater == 0 || !currentUser ? (
        <PagesContent
          image={
            <div className="w-[170px] h-[170px]">
              <Lottie animationData={box} />
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
              <div className="relative top-[7vh] grid grid-cols-4 gap-4 text-black-200">
                {savelater.map((item) => (
                  <div
                    key={item.id}
                    className={`pb-4 h-[350px] w-[305px] bg-stone-500 
                    rounded-lg rounded-t-2xl overflow-hidden `}
                  >
                    {/* Savelater */}
                    <div className="relative">
                      {' '}
                      <div
                        className="absolute bg-stone-200 flex
                        rounded-full w-[28px] h-[28px] shadow-md group
                        items-center justify-center right-1 top-1 cursor-pointer"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FavoriteBorderOutlinedIcon
                          className="text-white-300
                           group-hover:text-yellow"
                        />
                      </div>
                    </div>
                    {/* Image */}
                    <img
                      src={item.images[0]}
                      className="h-7.2 w-full object-cover rounded-2xl
                    bg-stone-100 border-none"
                      alt=""
                    />{' '}
                    {/* Description */}
                    <div className="pt-3.5 px-3">
                      <h3 className="text-sm"> {item.title} </h3>
                      {/* price */}
                      <div
                        className="flex items-center justify-between
                       pt-2"
                      >
                        <h3 className="text-base text-black-100">
                          {' '}
                          {currency}
                          {item.price}
                        </h3>
                        <h4
                          className="line-through tracking-wider 
                        text-sm opacity-[0.8]"
                        >
                          {' '}
                          {currency}
                          {item.price + 70}
                        </h4>
                      </div>
                      {/* Rating */}
                      <Rating
                        name="read-only"
                        className="pt-1"
                        value="4"
                        readOnly
                      />

                      {/* Add to cart */}
                      <CustomSnackbar
                        children={
                          <Button
                            variant="outlined"
                            className="relative top-2"
                            onClick={() => handleCart(item)}
                            sx={{
                              boxShadow: 'none',
                              border: '1.2px solid rgba(230, 155, 0, 0.5)',
                              width: '100%',
                              height: '35px',
                              fontFamily: 'outfit',
                              fontSize: '11px',
                              color: '#333333',
                              borderRadius: '10px',
                              '&:hover': {
                                background: 'rgba(230, 155, 0, 0.2)',
                                boxShadow: 'none',
                                border: '1.2px solid rgba(230, 155, 0, 0.5)',
                              },
                            }}
                          >
                            {' '}
                            Add to cart{' '}
                          </Button>
                        }
                        message={<span>Item has been added to cart</span>}
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
