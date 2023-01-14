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
    <div
      className="lg:mt-0
      w-full max-w-[100%] h-8.3 bg-white-300 rounded-2xl text-black-200 mt-6"
    >
      {/* Heading */}
      <div
        className="md:py-3.5 py-3.5 border-b border-white-700 flex
       justify-between px-3"
      >
        <h4>Order summary</h4>
        <h4>{counter} Items</h4>
      </div>
      {/* Delivery Charges */}
      <div className="border-b border-white-700 flex justify-between px-3 py-3.5">
        <h4 className="2xl:text-base xl:text-[15px] text-xs">
          Delivery Charges:
        </h4>
        <p className="2xl:text-sm xl:text-xs text-xxs text-right opacity-[0.7]">
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
        <h4 className="2xl:text-base xl:text-[15px] text-xs"> Subtotal: </h4>
        <p className="xl:text-tiny text-base">
          {currency}
          {price}
        </p>
      </div>
      {/* Total */}
      <div className="border-b border-white-700 flex justify-between px-3 py-3.5">
        <h4 className="2xl:text-xl xl:text-lg text-tiny font-medium">
          {' '}
          Total{' '}
        </h4>
        <p className="xl:text-xl text-lg font-medium">
          {' '}
          {currency}
          {price}{' '}
        </p>
      </div>
      {/* delivery info */}
      <p className="2xl:text-sm xl:text-[12px] md:text-xs text-xxs text-darkOrange opacity-[0.7] text-right px-2 py-1">
        {' '}
        Excluding delivery charges{' '}
      </p>
      {/* Checkout Button */}
      <Link to={currentUser ? '/checkout/completeOrder' : '/account/login'}>
        <div className="border-b border-white-700 flex justify-center py-2 pb-3">
          <button
            className="2xl:text-lg xl:text-base 2xl:h-6
            w-[90%] h-5.5 rounded-lg bg-stone-200
           text-sm text-white-300 hover:bg-charcoal font-out-fit"
          >
            Continue to checkout
          </button>
        </div>
      </Link>
      {/* Card accepted */}
      <div className="flex items-center pt-1">
        <span className="2xl:text-sm xl:text-xs text-xxs opacity-[0.4] px-3">
          {' '}
          We accept:{' '}
        </span>
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
      <p className="2xl:text-sm 2xl:py-3.5 xl:text-xs xl:py-3 text-xxs opacity-[0.4] px-3 py-2 flex items-center">
        <LockIcon className="xl:scale-[1] text-blue mr-[4px] scale-[0.8]" />
        <span>Transactions are 100% save and secure</span>
      </p>
    </div>
  )
}
