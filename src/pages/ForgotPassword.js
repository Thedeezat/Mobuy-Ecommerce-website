import React, { useState, useRef } from 'react'

import { Link } from 'react-router-dom'

import Lottie from 'lottie-react'

import arrow from '../components/lottie/arrow.json'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

import Divider from '@mui/material/Divider'

import { AuthContext } from '../components/Auth/AuthContext'

import { auth } from '../components/Auth/Firebase'

import { AlertError } from '../components/Error'

import Spinner from '../components/Loader/Spinner'

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { resetPassword } = AuthContext()

  const emailRef = useRef()

  const handleReset = async (e) => {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await resetPassword(auth, emailRef.current.value)
    } catch {
      setError('Failed to reset password')
    }

    setLoading(false)
  }
  return (
    <>
      {/* back arrow */}
      <Link to="/">
        {' '}
        <h2
          className="2xl:text-xl md:text-lg md:top-3 md:left-3 lg:left-5
          text-base text-black-200 mt-3 relative top-2
          left-3 flex items-center cursor-pointer hover:text-charcoal"
        >
          <Lottie
            animationData={arrow}
            className="md:scale-1 w-[50px] h-[50px] rotate-[180deg] scale-[0.9]"
          />
          <span className="md:ml-2 ml-1">Back</span>
        </h2>{' '}
      </Link>

      <div
        className="md:mx-0 mx-3.5 h-screen flex relative justify-center
       items-center"
      >
        <div className="2xl:max-w-[550px] w-full max-w-[480px] bg-white-300 pb-3.5 rounded-xl">
          {/* Heading */}
          <div
            className="text-center border-b border-white-700
           py-3"
          >
            <h4 className="2xl:text-4xl md:text-3xl text-2xl">
              Password Reset
            </h4>
          </div>
          {/* Form */}
          <form
            className="flex justify-center
            flex-col px-5 mt-3 gap-y-3.5"
            onSubmit={handleReset}
          >
            {/* Error */}
            {error ? (
              <p
                className="2xl:text-base md:text-sm text-xs
                 text-center rounded-lg
             bg-red py-3 text-darkOrange"
              >
                We could not reset your password. please check <br /> your
                details and try again.
              </p>
            ) : (
              <p
                className="2xl:text-base md:text-sm text-xs text-center
               opacity-[0.5] rounded-lg bg-ash py-3"
              >
                Enter your details and check your inbox <br /> for further
                instructions.
              </p>
            )}

            {/* email */}
            <div className="relative flex flex-col">
              <label
                htmlFor="email"
                className="md:text-sm text-xs text-black-200"
              >
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                required
                id="email"
                name="email"
                placeholder="Enter Email Address"
                className="md:h-[45px] 2xl:h-[55px] 2xl:text-base md:text-sm
                placeholder:text-black-200 placeholder:opacity-[0.7] 
                text-xs px-3.5 my-1 w-full h-[50px] bg-transparent text-black-100 
                rounded-xl border border-stone-400 font-out-fit focus:outline
                focus:border-transparent outline-1 outline-stone-200
                hover:border-stone-200"
              />
              <AlternateEmailIcon
                className="2xl:top-[55px] md:top-[48px]
                absolute text-black-200 right-2 
                top-[44px] opacity-[0.7] "
              />
            </div>

            {/* reset btn */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="md:h-[45px] 2xl:h-[55px] 2xl:text-lg md:text-base
                w-full h-[45px] bg-stone-200
               text-white-300 rounded-xl text-sm font-out-fit
               tracking-wide hover:bg-charcoal relative flex 
               justify-center items-center"
              >
                {' '}
                {loading ? '' : <span>Reset Password</span>}
                {loading && <Spinner color="#D3D3D3" styles="absolute" />}
              </button>
            </div>
          </form>

          {/* Option */}
          <div className="md:pt-7 pt-5 px-4">
            <Divider className="opacity-[0.5]" orientation="horizontal">
              <span
                className="border border-stone-600 w-6 h-6
               p-[4px] rounded-full tracking-wider"
              >
                OR
              </span>
            </Divider>

            {/* Login */}
            <p
              className="md:text-base 2xl:text-lg md:mt-4 text-sm mt-3.5 text-black-200
               w-full opacity-[0.8]"
            >
              I remember my password?{' '}
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
