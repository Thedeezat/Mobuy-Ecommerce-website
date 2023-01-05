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

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  clearTimeout(handleSubmit)

  return (
    <div>
      {/* Contact Info */}
      <form
        className="bg-stone-500 w-13 h-12.2 flex flex-col
        only:justify-center rounded-xl"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl border-b px-4 border-stone-600 mb-3 py-2">
          Contact Information
        </h3>
        <div className="text-base opacity-[0.8] flex flex-col gap-y-3 mt-3 px-4">
          {/* Name */}
          <div className="relative flex flex-col">
            <label htmlFor="first-name" className="text-sm text-black-200">
              First name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              onChange={(e) => OnsetFirstName(e.target.value)}
              value={first_name ? first_name : ''}
              placeholder="Enter first name"
              className={`placeholder:text-black-200 placeholder:opacity-[0.7] 
                text-sm px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
                rounded-xl border border-stone-400 font-out-fit focus:outline
                focus:border-transparent outline-1 outline-stone-200
                hover:border-stone-200`}
            />
          </div>
          {/* Last name */}
          <div className="relative flex flex-col">
            <label htmlFor="last-name" className="text-sm text-black-200">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              onChange={(e) => OnsetLastName(e.target.value)}
              value={last_name ? last_name : ''}
              placeholder="Enter last name"
              className={`placeholder:text-black-200 placeholder:opacity-[0.7] 
                    text-sm px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
                    rounded-xl border border-stone-400 font-out-fit focus:outline
                    focus:border-transparent outline-1 outline-stone-200
                    hover:border-stone-200`}
            />
          </div>
          {/* email */}
          <div className="relative flex flex-col">
            <label htmlFor="email" className="text-sm text-black-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Email Address"
              className="placeholder:text-black-200 placeholder:opacity-[0.7] 
                    text-sm px-3.5 my-1 w-full h-[50px] bg-transparent text-black-100 
                    rounded-xl border border-stone-400 font-out-fit focus:outline
                    focus:border-transparent outline-1 outline-stone-200
                    hover:border-stone-200"
            />
          </div>
          {/* Current password */}
          <div className="relative flex flex-col">
            <label htmlFor="curent-password" className="text-sm text-black-200">
              Current password
            </label>
            <input
              type="password"
              id="curent-password"
              name="curent-password"
              onChange={(e) => setCurrentPassword(e.target.value)}
              value={currentPassword}
              placeholder="Enter current password"
              className={`placeholder:text-black-200 placeholder:opacity-[0.7] 
                    text-sm px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
                    rounded-xl border border-stone-400 font-out-fit focus:outline
                    focus:border-transparent outline-1 outline-stone-200
                    hover:border-stone-200`}
            />
          </div>
          {/* New password */}
          <div className="relative flex flex-col">
            <label htmlFor="new-password" className="text-sm text-black-200">
              New password
            </label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              placeholder="Enter new passsword"
              className={`placeholder:text-black-200 placeholder:opacity-[0.7] 
                    text-sm px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
                    rounded-xl border border-stone-400 font-out-fit focus:outline
                    focus:border-transparent outline-1 outline-stone-200
                    hover:border-stone-200`}
            />
          </div>
          {/* New password */}
          <div className="relative flex flex-col">
            <label
              htmlFor="confirm-password"
              className="text-sm text-black-200"
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
              className={`placeholder:text-black-200 placeholder:opacity-[0.7] 
                text-sm px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
                rounded-xl border border-stone-400 font-out-fit focus:outline
                focus:border-transparent outline-1 outline-stone-200
                hover:border-stone-200`}
            />
          </div>
          {/* Login btn */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full h-[45px] bg-stone-200
             text-white-300 rounded-xl text-base font-out-fit
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
