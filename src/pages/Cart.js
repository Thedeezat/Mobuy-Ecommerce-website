import React, { useContext } from 'react'

import PagesContent from '../components/PagesContent'

import cartLottie from '../components/lottie/cartLottie.json'

import Lottie from 'lottie-react'

import { productContext } from '../App'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import { CustomSnackbar } from '../components/Snackbar'

export default function Cart() {
  const { counter, cart, currency, setCart } = useContext(productContext)

  const handleRemoveItem = (id) => {
    const arr = cart.filter((item) => item.id !== id)
    setCart(arr)
  }

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
                className="flex text-black-200 justify-start items-start 
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
                      <div className="flex gap-[100px]">
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
                          <CustomSnackbar
                            children={
                              <p className="cursor-pointer hover:text-blue">
                                <DeleteOutlinedIcon
                                  sx={{ width: '22px', height: '22px' }}
                                  className="mr-1"
                                />
                                Remove Item
                              </p>
                            }
                            message={
                              <span>Item has been removed from cart</span>
                            }
                            button_text="View home"
                            success="True"
                          />
                          {/* save */}
                          <CustomSnackbar
                            children={
                              <p className="cursor-pointer ml-[3px] hover:text-blue">
                                {' '}
                                <FavoriteBorderOutlinedIcon
                                  sx={{ width: '19px', height: '19px' }}
                                  className="mr-1"
                                />
                                Save Item
                              </p>
                            }
                            message={<span>Item has been saved</span>}
                            button_text="View saved items"
                            success="True"
                          />
                        </div>
                        {/* Action ends */}
                      </div>
                    </div>
                  ))}
                  {/* Cart Items ends*/}
                </div>
              </div>
            </>
          }
          page_heading="Shopping cart"
        />
      )}
    </>
  )
}
