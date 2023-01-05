import React, { useEffect, useState } from 'react'

import LockIcon from '@mui/icons-material/Lock'

import { FaCcMastercard } from 'react-icons/fa'

import { SiVisa } from 'react-icons/si'

import { Link } from 'react-router-dom'

export default function OrderSummary({ counter, currency, cart, currentUser }) {
  const [price, setPrice] = useState('')
  const [total, setTotal] = useState(0)

  const handleTotal = () => {
    let amount = 0
    cart.map((item) => setTotal((amount += item.price)))
    setPrice(total)
  }
  useEffect(() => {
    handleTotal()
  }, [cart, total])

  return (
    <div className="w-8 h-8.3 bg-white-300 rounded-2xl text-black-200">
      {/* Heading */}
      <div
        className="py-3.5 border-b border-white-700 flex
       justify-between px-3"
      >
        <h4>Order summary</h4>
        <h4>{counter} Items</h4>
      </div>
      {/* Delivery Charges */}
      <div className="border-b border-white-700 flex justify-between px-3 py-3.5">
        <h4 className="text-[15px]">Delivery Charges:</h4>
        <p className="text-xs text-right opacity-[0.7]">
          {' '}
          Delivery charges will
          <br />
          be added after
          <br />
          the checkout.
        </p>
      </div>
      {/* Subtotal */}
      <div className="border-b border-white-700 flex justify-between px-3 py-3.5">
        <h4 className="text-[15px]"> Subtotal: </h4>
        <p className="text-tiny">
          {currency}
          {price}
        </p>
      </div>
      {/* Total */}
      <div className="border-b border-white-700 flex justify-between px-3 py-3.5">
        <h4 className="text-lg font-medium"> Total </h4>
        <p className="text-xl font-medium">
          {' '}
          {currency}
          {price}{' '}
        </p>
      </div>
      {/* delivery info */}
      <p className="text-[12px] text-darkOrange opacity-[0.7] text-right px-2 py-1">
        {' '}
        Excluding delivery charges{' '}
      </p>
      {/* Checkout Button */}
      <Link to={currentUser ? '/checkout/completeOrder' : '/account/login'}>
        <div className="border-b border-white-700 flex justify-center py-2 pb-3">
          <button
            className="w-[90%] h-5.5 rounded-lg bg-stone-200
           text-base text-white-300 hover:bg-charcoal font-out-fit"
          >
            Continue to checkout
          </button>
        </div>
      </Link>
      {/* Card accepted */}
      <div className="flex items-center pt-1">
        <span className="text-xs opacity-[0.4] px-3"> We accept: </span>
        <div className="flex gap-x-2 items-center">
          <FaCcMastercard />
          <SiVisa className="text-2xl" />
          <span
            className="text-xs px-[3px] bg-charcoal
            rounded-[3px] text-white-300 scale-[0.8]"
          >
            {' '}
            <span className="relative">
              {' '}
              <div
                className="w-1 h-1 bg-orange opacity-[0.5]
              rounded-full absolute left-0 top-[4px]"
              ></div>{' '}
              V
            </span>
            erve{' '}
          </span>
          {/* mobuy pay */}
          <p className="text-xs font-thin tracking-wide italic">
            Mobuy<span className="text-blue">Pay </span>
          </p>
        </div>
      </div>
      {/* secure */}
      <p className="text-xs opacity-[0.4] px-3 py-1 flex items-center">
        <LockIcon className="text-blue mr-[4px]" />
        <span>Transactions are 100% save and secure</span>
      </p>
    </div>
  )
}
