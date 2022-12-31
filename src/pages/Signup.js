import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import Lottie from 'lottie-react'

import arrow from '../components/lottie/arrow.json'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import VisibilityIcon from '@mui/icons-material/Visibility'

import Divider from '@mui/material/Divider'

export function Signup() {
  const [passwordType, setPasswordType] = useState('password')
  const [passwordInput, setPasswordInput] = useState('')
  const [visibilityOn, setVisibilityOn] = useState(true)

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value)
  }
  const handlePasswordShow = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      setVisibilityOn(false)
      return
    } else {
      setPasswordType('password')
      setVisibilityOn(true)
    }
  }
  return (
    <>
      {/* back arrow */}
      <Link to="/">
        {' '}
        <h2
          className="text-lg text-black-200 mt-3 absolute top-3
          left-5 flex items-center cursor-pointer hover:text-charcoal"
        >
          <Lottie
            animationData={arrow}
            className="w-[50px] h-[50px] rotate-[180deg]"
          />
          <span className="ml-2">Back</span>
        </h2>{' '}
      </Link>

      <div
        className="h-screen flex justify-center
        items-center"
      >
        <div className="w-9 h-12.1 bg-white-300 rounded-xl">
          {/* Heading */}
          <div
            className="text-center border-b border-white-700
            py-3"
          >
            <h4 className="text-3xl">
              <Link to="/">
                <span className="text-stone-200 mr-[6px]">Mobuy</span>
              </Link>{' '}
              Signup
            </h4>
          </div>
          {/* Form */}
          <form
            className="flex justify-center
            flex-col px-5 mt-3 gap-y-3.5"
          >
            {/* Full name */}
            <div className="relative flex flex-col">
              <label htmlFor="name" className="text-sm text-black-200">
                Full name
              </label>
              <input
                type="text"
                required
                id="name"
                name="name"
                placeholder="Enter Full Name"
                className="placeholder:text-black-200 placeholder:opacity-[0.7] 
                text-sm px-3.5 my-1 w-full h-[50px] bg-transparent text-black-100 
                rounded-xl border border-stone-400 font-out-fit focus:outline
                focus:border-transparent outline-1 outline-stone-200
                hover:border-stone-200"
              />
            </div>
            {/* email */}
            <div className="relative flex flex-col">
              <label htmlFor="email" className="text-sm text-black-200">
                Email
              </label>
              <input
                type="email"
                required
                id="email"
                name="email"
                placeholder="Enter Email Address"
                className="placeholder:text-black-200 placeholder:opacity-[0.7] 
                text-sm px-3.5 my-1 w-full h-[50px] bg-transparent text-black-100 
                rounded-xl border border-stone-400 font-out-fit focus:outline
                focus:border-transparent outline-1 outline-stone-200
                hover:border-stone-200"
              />
            </div>
            {/* Number */}
            <div className="relative flex flex-col">
              <label htmlFor="number" className="text-sm text-black-200">
                Phone Number
              </label>
              <input
                type="number"
                required
                id="number"
                name="number"
                placeholder="Enter Phone Number"
                className="placeholder:text-black-200 placeholder:opacity-[0.7] 
                text-sm px-3.5 my-1 w-full h-[50px] bg-transparent text-black-100 
                rounded-xl border border-stone-400 font-out-fit focus:outline
                focus:border-transparent outline-1 outline-stone-200
                hover:border-stone-200"
              />
            </div>

            {/* password */}
            <div className="relative flex flex-col">
              <label htmlFor="password" className="text-sm text-black-200">
                Password
              </label>
              <input
                type={passwordType}
                required
                onChange={handlePasswordChange}
                value={passwordInput}
                id="password"
                name="password"
                placeholder="Enter Password"
                className="placeholder:text-black-200 placeholder:opacity-[0.7] 
                text-sm px-3.5 my-1 w-full h-[50px] bg-transparent text-black-100 
                rounded-xl border border-stone-400 font-out-fit focus:outline
                focus:border-transparent outline-1 outline-stone-200
                hover:border-stone-200"
              />
              {visibilityOn ? (
                <VisibilityOffIcon
                  className="absolute text-black-200 right-2 top-[45px]
              cursor-pointer opacity-[0.7] "
                  onClick={handlePasswordShow}
                />
              ) : (
                <VisibilityIcon
                  className="absolute text-black-200 right-2 top-[45px]
              cursor-pointer opacity-[0.7] "
                  onClick={handlePasswordShow}
                />
              )}
            </div>
            {/* Signup btn */}
            <div>
              <button
                className="w-full h-[45px] bg-stone-200
           text-white-300 rounded-xl text-base font-out-fit
           tracking-wide hover:bg-charcoal"
              >
                {' '}
                Signup{' '}
              </button>
            </div>
          </form>

          {/* Terms and Conditions */}
          <div className="px-4">
            <div className="mt-3.5 flex items-center justify-center">
              <p className="text-black-200 opacity-[0.7] text-sm text-center">
                By signing up you accept our{' '}
                <span className="underline cursor-pointer">
                  terms and conditions <br /> & privacy policy
                </span>
              </p>
            </div>

            {/* Login */}
            <p
              className="text-base mt-3 text-black-200
              w-full opacity-[0.8] text-center"
            >
              Already have an account?{' '}
              <Link to="/account/login">
                <span
                  className="text-blue ml-[4px] cursor-pointer
                hover:text-black-200"
                >
                  Login{' '}
                </span>
              </Link>
            </p>
          </div>
          {/* signin option closes */}
        </div>
      </div>
    </>
  )
}

export default Signup
