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
    <div className="w-8 h-full bg-stone-500 pb-1 rounded-lg">
      {/* heading */}
      <div
        className="flex justify-between items-center
           px-4 border-b border-stone-700 py-3 
          text-base"
      >
        <h2 className="">Order Details</h2>
        <Link to="/cart">
          <button
            className="bg-stone-700 w-[90px] h-[30px] rounded-md
            text-black-200 text-xs hover:text-charcoal"
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
            className="flex py-4 justify-between px-4
              border-b border-stone-700"
          >
            <div className="flex gap-4">
              <img
                src={item.images[0]}
                className="w-7 h-7 rounded-md object-cover"
                alt=""
              />
              <div>
                <h4 className="font-medium text-base"> {item.title} </h4>
                <p className="text-blue text-xs mt-1"> Mobuy store</p>
                <p className="text-xs mt-3 opacity-[0.8] font-medium">
                  {currency}
                  {item.price}.00
                </p>
              </div>
            </div>
          </div>
        ))}
      {/* Cart Items ends*/}
      <div
        className="border-t border-stone-700 py-3 px-4 flex
       flex-col gap-y-3 text-base"
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
        <div className="flex text-lg justify-between font-medium">
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
