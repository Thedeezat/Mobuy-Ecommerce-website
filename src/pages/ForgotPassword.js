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
        <div className="w-9 bg-white-300 pb-3.5 rounded-xl">
          {/* Heading */}
          <div
            className="text-center border-b border-white-700
           py-3"
          >
            <h4 className="text-3xl">Password Reset</h4>
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
                className="text-sm text-center rounded-lg
             bg-red py-3 text-darkOrange"
              >
                We could not reset your password. please check <br /> your
                details and try again.
              </p>
            ) : (
              <p className="text-sm text-center opacity-[0.5] rounded-lg bg-ash py-3">
                Enter your details and check your inbox <br /> for further
                instructions.
              </p>
            )}

            {/* email */}
            <div className="relative flex flex-col">
              <label htmlFor="email" className="text-sm text-black-200">
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
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

            {/* reset btn */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full h-[45px] bg-stone-200
               text-white-300 rounded-xl text-base font-out-fit
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
          <div className="pt-7 px-4">
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
              className="text-base mt-4 text-black-200
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
