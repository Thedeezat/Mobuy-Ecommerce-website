import React, { useState } from 'react'

import Spinner from '../Loader/Spinner'

export default function AccountInfo({
  currentUser,
  first_name,
  OnsetFirstName,
  last_name,
  OnsetLastName,
}) {
  const [email, setEmail] = useState(`${currentUser ? currentUser.email : ''}`)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [comfirmPassword, setComfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const inputStye = `2xl:text-base 2xl:h-[50px]
    md:text-sm placeholder:text-black-200 placeholder:opacity-[0.7]
    text-xs px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
    rounded-xl border border-stone-400 font-out-fit 
    focus:outlinefocus:border-transparent outline-1 
    outline-stone-200 hover:border-stone-200
  `

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  clearTimeout(handleSubmit)

  return (
    <div className="w-full">
      {/* Contact Info */}
      <form
        className="md:rounded-xl md:h-12.2 2xl:h-12.3
        bg-stone-500 h-12.1 flex flex-col
        justify-center rounded-lg"
        onSubmit={handleSubmit}
      >
        <h3 className="md:px-4 2xl:text-2xl text-lg border-b px-3.5 border-stone-600 py-3">
          Contact Information
        </h3>
        <div className="md:px-4 text-base opacity-[0.8] flex flex-col gap-y-3 mt-3 px-3.5">
          {/* Name */}
          <div className="relative flex flex-col">
            <label
              htmlFor="first-name"
              className="2xl:text-base lg:text-sm text-xs text-black-200"
            >
              First name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
              onChange={(e) => OnsetFirstName(e.target.value)}
              value={first_name ? first_name : ''}
              placeholder="Enter first name"
              className={inputStye}
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
              id="last-name"
              name="last-name"
              required
              onChange={(e) => OnsetLastName(e.target.value)}
              value={last_name ? last_name : ''}
              placeholder="Enter last name"
              className={inputStye}
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
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Email Address"
              className={inputStye}
            />
          </div>
          {/* Current password */}
          <div className="relative flex flex-col">
            <label
              htmlFor="curent-password"
              className="2xl:text-base lg:text-sm text-xs text-black-200"
            >
              Current password
            </label>
            <input
              type="password"
              id="curent-password"
              name="curent-password"
              onChange={(e) => setCurrentPassword(e.target.value)}
              value={currentPassword}
              placeholder="Enter current password"
              className={inputStye}
            />
          </div>
          {/* New password */}
          <div className="relative flex flex-col">
            <label
              htmlFor="new-password"
              className="2xl:text-base lg:text-sm text-xs text-black-200"
            >
              New password
            </label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              placeholder="Enter new passsword"
              className={inputStye}
            />
          </div>
          {/* New password */}
          <div className="relative flex flex-col">
            <label
              htmlFor="confirm-password"
              className="2xl:text-base lg:text-sm text-xs text-black-200"
            >
              Confirm new password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              onChange={(e) => setComfirmPassword(e.target.value)}
              value={comfirmPassword}
              placeholder="Confirm new password"
              className={inputStye}
            />
          </div>
          {/* Login btn */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="md:text-base 2xl:h-[55px] 
              w-full h-[45px] bg-stone-200
             text-white-300 rounded-xl text-sm font-out-fit
             tracking-wide hover:bg-charcoal relative flex 
              justify-center items-center mb-3"
            >
              {' '}
              {loading ? '' : <span> Update Changes </span>}
              {loading && <Spinner color="#D3D3D3" styles="absolute" />}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
