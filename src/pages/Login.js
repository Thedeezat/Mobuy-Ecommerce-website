import React, { useState, useRef } from 'react'

import { Link, useHistory } from 'react-router-dom'

import Lottie from 'lottie-react'

import arrow from '../components/lottie/arrow.json'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import VisibilityIcon from '@mui/icons-material/Visibility'

import Divider from '@mui/material/Divider'

import FacebookIcon from '@mui/icons-material/Facebook'

import { FcGoogle } from 'react-icons/fc'

import { AuthContext } from '../components/Auth/AuthContext'

import { auth } from '../components/Auth/Firebase'

import { AlertError } from '../components/Error'

import Spinner from '../components/Loader/Spinner'

export default function Login({
  visibilityOn,
  passwordInput,
  handlePasswordChange,
  handlePasswordShow,
  passwordType,
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [googleError, setGoogleError] = useState('')
  const { login, googleSignin } = AuthContext()
  const history = useHistory()

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(auth, emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to login')
    }

    setLoading(false)
  }
  const handleGoogle = async () => {
    try {
      setGoogleError('')
      await googleSignin()
      history.push('/')
    } catch {
      setGoogleError('Failed to login with google')
    }
  }
  const inputStyle = `2xl:h-[60px] 2xl:text-base md:h-[50px] md:text-sm
  placeholder:text-black-200 placeholder:opacity-[0.7] 
  text-xs px-3.5 my-1 w-full h-[45px] bg-transparent text-black-100 
  rounded-xl border border-stone-400 font-out-fit focus:outline
  focus:border-transparent outline-1 outline-stone-200
  hover:border-stone-200`

  return (
    <div className="overflow-x-hidden">
      {/* back arrow */}
      <div className="md:top-3 md:left-3 lg:left-5  w-7.1 relative top-2  z-50  left-3">
        <Link to="/">
          {' '}
          <h2
            className="2xl:text-xl md:text-lg 
          text-base text-black-200 mt-3  
          flex items-center cursor-pointer hover:text-charcoal"
          >
            <Lottie
              animationData={arrow}
              className="md:scale-1 w-[50px] h-[50px] rotate-[180deg] scale-[0.9]"
            />
            <span className="md:ml-2 ml-1">Back</span>
          </h2>{' '}
        </Link>
      </div>

      <div
        className="md:mx-0 mx-3.5 h-screen flex relative justify-center max-[320px]:top-[-30px] md:top-[-20px]
       items-center top-[-70px]"
      >
        <div className="2xl:max-w-[550px] w-full max-w-[480px] bg-white-300 pb-3.5 rounded-xl">
          {/* Heading */}
          <div className="text-center border-b border-white-700 py-3">
            <h4 className="2xl:text-4xl md:text-3xl text-2xl">
              <Link to="/">
                <span className="text-stone-200 mr-[5px]">Mobuy</span>
              </Link>{' '}
              Login
            </h4>
          </div>
          {/* Form */}
          <form
            className="md:px-5 flex justify-center
            flex-col px-3.5 mt-3 gap-y-3.5"
            onSubmit={handleLogin}
          >
            {/* Error */}
            {error && (
              <div className="top-3">
                <AlertError styles="text-blue" error={error} />
              </div>
            )}
            {googleError && (
              <div className="top-3">
                <AlertError styles="text-blue" error={googleError} />
              </div>
            )}
            {/* email */}
            <div className="relative flex flex-col">
              <label
                htmlFor="email"
                className="2xl:text-base md:text-sm text-xs text-black-200"
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
                className={inputStyle}
              />
              <AlternateEmailIcon
                className="2xl:top-[55px] absolute text-black-200 right-2 
                top-[48px] opacity-[0.7] "
              />
            </div>

            {/* password */}
            <div className="relative flex flex-col">
              <label
                htmlFor="password"
                className="2xl:text-base md:text-sm text-xs text-black-200"
              >
                Password
              </label>
              {/* forget password */}
              <Link to="/forgot-password">
                <p
                  className="md:text-sm text-xs absolute top-0 right-0 text-right text-blue
                cursor-pointer underline"
                >
                  {' '}
                  Forget Password?{' '}
                </p>
              </Link>
              <input
                type={passwordType}
                required
                onChange={handlePasswordChange}
                value={passwordInput}
                ref={passwordRef}
                id="password"
                name="password"
                placeholder="Enter Password"
                className={inputStyle}
              />
              {visibilityOn ? (
                <VisibilityOffIcon
                  className="2xl:top-[55px] absolute text-black-200 right-2 top-[45px]
                  cursor-pointer opacity-[0.7] "
                  onClick={handlePasswordShow}
                />
              ) : (
                <VisibilityIcon
                  className="2xl:top-[55px] absolute text-black-200 right-2 top-[45px]
                  cursor-pointer opacity-[0.7] "
                  onClick={handlePasswordShow}
                />
              )}
            </div>
            {/* Login btn */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="2xl:text-tiny 2xl:h-[50px] md:h-[45px] md:text-base 
                w-full h-[40px] bg-stone-200
               text-white-300 rounded-xl text-sm font-out-fit
                tracking-wide hover:bg-charcoal relative flex 
                justify-center items-center"
              >
                {' '}
                {loading ? '' : <span>Login</span>}
                {loading && <Spinner color="#D3D3D3" styles="absolute" />}
              </button>
            </div>
          </form>

          {/* Signin options */}
          <div className="md:pt-5 pt-4 px-4">
            <Divider className="opacity-[0.5]" orientation="horizontal">
              <span
                className="md:w-6 md:h-6 border border-stone-600 w-5 h-5 
               p-[4px] rounded-full tracking-wider"
              >
                OR
              </span>
            </Divider>
            {/* social media */}
            <div className="mt-3.5 flex items-center gap-x-3">
              {/* Facebook */}
              <div
                className="md:text-sm 2xl:text-base md:px-2
                border border-stone-200 flex
                justify-center items-center py-[5px] rounded-md text-xs
                px-1 opacity-[0.5]"
              >
                <span className="opacity-[0.7]"> Login with</span>
                <FacebookIcon
                  fontSize="large"
                  className="md:scale-1 scale-[0.8] ml-[4px] text-black-200"
                />
              </div>

              {/* google */}
              <div
                className="md:text-sm 2xl:text-base md:px-2
                border border-stone-200 flex
                justify-center items-center py-[5px] rounded-md text-xs
                px-1 cursor-pointer hover:bg-ash"
                onClick={handleGoogle}
              >
                <span className="opacity-[0.7]"> Login with </span>
                <FcGoogle className="md:text-base ml-[5px] text-sm" />
              </div>
            </div>

            {/* Create account */}
            <p
              className="md:text-base 2xl:text-lg
              text-sm mt-4 text-black-200
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
    </div>
  )
}
