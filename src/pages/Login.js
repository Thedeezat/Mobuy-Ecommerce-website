import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import Lottie from 'lottie-react'

import arrow from '../components/lottie/arrow.json'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import VisibilityIcon from '@mui/icons-material/Visibility'

import Divider from '@mui/material/Divider'

import FacebookIcon from '@mui/icons-material/Facebook'

import { FcGoogle } from 'react-icons/fc'

export default function Login() {
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
        <div className="w-9 h-[525px] bg-white-300 rounded-xl">
          {/* Heading */}
          <div
            className="text-center border-b border-white-700
           py-3"
          >
            <h4 className="text-3xl">
              <Link to="/">
                <span className="text-stone-200 mr-[5px]">Mobuy</span>
              </Link>{' '}
              Login
            </h4>
          </div>
          {/* Form */}
          <form
            className="flex justify-center
            flex-col px-5 mt-3 gap-y-3.5"
          >
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
              <AlternateEmailIcon
                className="absolute text-black-200 right-2 
                top-[48px] opacity-[0.7] "
              />
            </div>

            {/* password */}
            <div className="relative flex flex-col">
              <label htmlFor="password" className="text-sm text-black-200">
                Password
              </label>
              {/* forget password */}
              <p
                className="absolute top-0 right-0 text-right text-blue text-sm 
                cursor-pointer underline"
              >
                {' '}
                Forget Password?{' '}
              </p>
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
            {/* Login btn */}
            <div>
              <button
                className="w-full h-[45px] bg-stone-200
               text-white-300 rounded-xl text-base font-out-fit
               tracking-wide hover:bg-charcoal"
              >
                {' '}
                Login{' '}
              </button>
            </div>
          </form>

          {/* Signin options */}
          <div className="py-5 px-4">
            <Divider className="opacity-[0.5]" orientation="horizontal">
              <span
                className="border border-stone-600 w-6 h-6
               p-[4px] rounded-full tracking-wider"
              >
                OR
              </span>
            </Divider>
            {/* social media */}
            <div className="mt-3.5 flex items-center gap-x-3">
              {/* Facebook */}
              <div
                className="h-3 border border-stone-200 flex
              justify-center items-center py-3 rounded-md text-sm
              px-2 cursor-pointer hover:bg-ash"
              >
                <span className="opacity-[0.7]"> Login with</span>
                <FacebookIcon
                  fontSize="large"
                  className="ml-[4px] text-black-200"
                />
              </div>

              {/* google */}
              <div
                className="h-3 border border-stone-200 flex
              justify-center items-center py-3 rounded-md text-sm
              px-2 cursor-pointer hover:bg-ash"
              >
                <span className="opacity-[0.7]"> Login with </span>
                <FcGoogle className="ml-[4px] text-base" />
              </div>
            </div>

            {/* Create account */}
            <p
              className="text-base mt-4 text-black-200
               w-full opacity-[0.8]"
            >
              Don't have an account?{' '}
              <Link to="/account/signup">
                <span
                  className="text-blue ml-[4px] cursor-pointer
                 hover:text-black-200"
                >
                  Create an account{' '}
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
