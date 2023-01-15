import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

export default function OrderDetails({
  cart,
  currency,
  totalAmount,
  setTotalAmount,
}) {
  const [price, setPrice] = useState('')
  const [total, setTotal] = useState(0)
  const delivery = 5.9

  const handleTotal = () => {
    let amount = 0
    cart.map((item) => setTotal((amount += item.price)))
    setPrice(total)
  }
  setTotalAmount(total + delivery)

  useEffect(() => {
    handleTotal()
  }, [cart, total])
  return (
    <div
      className="md:col-span-1 md:my-0 
     my-1 bg-stone-500 rounded-lg"
    >
      {/* heading */}
      <div
        className="2xl:py-3.5 2xl:text-lg lg:px-4 md:px-3.5 lg:text-base
          flex justify-between items-center
          px-3 border-b border-stone-700 py-3 
          text-sm"
      >
        <h2 className="">Order Details</h2>
        <Link to="/cart">
          <button
            className="2xl:text-sm 2xl:w-[110px] 2xl:h-[40px] lg:w-[90px]
             md:w-[75px] lg:text-xs
            bg-stone-700 w-[85px] h-[30px] rounded-md
            text-black-200 text-[11px] hover:text-charcoal"
          >
            Modify Cart
          </button>
        </Link>
      </div>
      {/* Cart Items */}
      {cart &&
        cart.map((item) => (
          <div
            key={item.id}
            className="lg:py-4 flex py-3.5 justify-between px-4
              border-b border-stone-700"
          >
            <div className="flex gap-4">
              <img
                src={item.images[0]}
                className="2xl:w-7.1 2xl:h-7.1 lg:w-7 lg:h-7 md:w-6 md:h-6
                w-7 h-7 rounded-md object-cover"
                alt=""
              />
              <div>
                <h4 className="2xl:text-lg lg:text-base font-medium text-sm">
                  {' '}
                  {item.title}{' '}
                </h4>
                <p className="2xl:text-base lg:text-xs text-blue text-xxs mt-1">
                  {' '}
                  Mobuy store
                </p>
                <p className="2xl:text-base lg:text-xs text-sm mt-3 opacity-[0.8] font-medium">
                  {currency}
                  {item.price}.00
                </p>
              </div>
            </div>
          </div>
        ))}
      {/* Cart Items ends*/}
      <div
        className="2xl:text-lg 2xl:gap-y-4 lg:text-base lg:gap-y-3
         border-t border-stone-700 py-3 px-4 flex
       flex-col gap-y-3.5 text-sm"
      >
        <div className="flex justify-between pt-4">
          {' '}
          <p>SubTotal:</p>
          <p>
            {' '}
            {currency}
            {price}{' '}
          </p>
        </div>
        <div className="flex justify-between">
          <p> Delivery fee: </p>
          <p>
            {' '}
            {currency}
            {delivery}{' '}
          </p>
        </div>
        <div className="2xl:text-xl lg:text-lg flex text-tiny justify-between font-medium">
          <p>Total: </p>
          <p>
            {' '}
            {currency} {totalAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
