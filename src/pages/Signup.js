import React, { useState, useRef, useEffect } from 'react'

import { Link, useHistory } from 'react-router-dom'

import Lottie from 'lottie-react'

import arrow from '../components/lottie/arrow.json'

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import VisibilityIcon from '@mui/icons-material/Visibility'

import { AuthContext } from '../components/Auth/AuthContext'

import { auth } from '../components/Auth/Firebase'

import { AlertError } from '../components/Error'

import Spinner from '../components/Loader/Spinner'

export function Signup({
  visibilityOn,
  passwordInput,
  handlePasswordChange,
  handlePasswordShow,
  passwordType,
  setFirstName,
  firstName,
  setLastName,
  lastName,
}) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUp } = AuthContext()
  const history = useHistory()

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await signUp(auth, emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  const inputStyle = `2xl:h-[60px] 2xl:text-base lg:h-[50px] md:text-sm
  placeholder:text-black-200 placeholder:opacity-[0.7] 
  text-xs px-3.5 my-1 w-full h-[45px] bg-transparent text-black-100 
  rounded-xl border border-stone-400 font-out-fit focus:outline
  focus:border-transparent outline-1 outline-stone-200
  hover:border-stone-200`

  return (
    <div className="overflow-x-hidden">
      {/* back arrow */}
      <div className="md:top-3 md:left-3 lg:left-5 w-7.1 relative top-2 z-50 left-3">
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

      <div>
        <div
          className="relative md:mx-0 mx-3.5 lg:mt-0 mt-4 h-screen flex justify-center
          max-[320px]:top-[-20px] 
          items-center top-[-60px]"
        >
          <div className="2xl:max-w-[550px] w-full max-w-[480px] bg-white-300 pb-3.5 rounded-xl">
            {/* Heading */}
            <div
              className="text-center border-b border-white-700
            py-3"
            >
              <h4 className="2xl:text-4xl lg:text-3xl text-2xl">
                <Link to="/">
                  <span className="text-stone-200 mr-[6px]">Mobuy</span>
                </Link>{' '}
                Signup
              </h4>
            </div>
            {/* Form */}
            <form
              className="lg:gap-y-3 flex justify-center
            flex-col px-5 mt-3 gap-y-1"
              onSubmit={handleSubmit}
            >
              {/* Error */}
              {error && (
                <div className="top-3">
                  <AlertError styles="text-blue" error={error} />
                </div>
              )}
              {/* First name */}
              <div className="relative flex flex-col">
                <label
                  htmlFor="name"
                  className="2xl:text-base lg:text-sm text-xs text-black-200"
                >
                  First name
                </label>
                <input
                  type="text"
                  required
                  id="name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  name="name"
                  placeholder="Enter Full Name"
                  className={inputStyle}
                />
              </div>
              {/* Last name */}
              <div className="relative flex flex-col">
                <label
                  htmlFor="last-name"
                  className="2xl:text-base lg:text-sm text-xs text-black-200"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  id="last-name"
                  name="last-name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  placeholder="Enter last name"
                  className={inputStyle}
                />
              </div>
              {/* email */}
              <div className="relative flex flex-col">
                <label
                  htmlFor="email"
                  className="2xl:text-base lg:text-sm text-xs text-black-200"
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
              </div>
              {/* password */}
              <div className="relative flex flex-col">
                <label
                  htmlFor="password"
                  className="2xl:text-base lg:text-sm text-xs text-black-200"
                >
                  Password
                </label>
                <input
                  type={passwordType}
                  ref={passwordRef}
                  required
                  onChange={handlePasswordChange}
                  value={passwordInput}
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  className={inputStyle}
                />
                {visibilityOn ? (
                  <VisibilityOffIcon
                    className="absolute text-black-200 right-2 top-[45px]
                  cursor-pointer opacity-[0.7]"
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
                  type="submit"
                  disabled={loading}
                  className="2xl:text-tiny 2xl:h-[50px] lg:h-[45px] md:text-base
                w-full h-[40px] bg-stone-200
             text-white-300 rounded-xl text-base font-out-fit
               tracking-wide hover:bg-charcoal relative flex 
               justify-center items-center"
                >
                  {' '}
                  {loading ? '' : <span> Signup </span>}
                  {loading && <Spinner color="#D3D3D3" styles="absolute" />}
                </button>
              </div>
            </form>

            {/* Terms and Conditions */}
            <div className="px-4">
              <div className="mt-3.5 flex items-center justify-center">
                <p
                  className="2xl:text-base lg:text-sm text-black-200 opacity-[0.7]
               text-xs text-center"
                >
                  By signing up you accept our{' '}
                  <span className="underline cursor-pointer">
                    terms and conditions <br /> & privacy policy
                  </span>
                </p>
              </div>

              {/* Login */}
              <p
                className="lg:text-base
              text-sm mt-3 text-black-200
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
      </div>
    </div>
  )
}

export default Signup
