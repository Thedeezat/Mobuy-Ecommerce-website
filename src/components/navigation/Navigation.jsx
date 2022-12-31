import React, { useContext } from 'react'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded'

import { CiSearch } from 'react-icons/ci'

import { styled } from '@mui/material/styles'

import Badge from '@mui/material/Badge'

import FaceRoundedIcon from '@mui/icons-material/FaceRounded'

import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'

import { Link } from 'react-router-dom'

import { productContext } from '../../App'

import debounce from 'lodash.debounce'
import { useState } from 'react'

export default function Navigation({
  counter,
  currency,
  cartActive,
  savelaterActive,
}) {
  const { setSearchItem } = useContext(productContext)
  const [showProfile, setShowProfile] = useState(false)

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 0,
      color: 'white',
      fontSize: '10px',
      background: '#7688aa',
      fontFamily: 'outfit',
      borderRadius: '8px',
    },
  }))
  const handleChange = debounce((e) => {
    setSearchItem(e.target.value)
  }, 800)

  return (
    <>
      {/* navigation */}
      <nav className="flex items-center justify-between py-4 text-black-200">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <div className="flex items-center cursor-pointer">
              <MenuRoundedIcon fontSize="large" className="mr-3" />
              <h3 className="text-3xl"> Mobuy </h3>
            </div>
          </Link>
          {/* Search bar */}
          <div className="ml-6 mt-2 relative flex items-center">
            <CiSearch className="text-yellow absolute right-3 w-3.5 h-3.5" />
            <label htmlFor="search-bar"></label>
            <input
              type="text"
              id="search-bar"
              className="w-12 h-[55px] border-none outline-none
              rounded-xl bg-stone-400 px-4 text-sm font-out-fit
              placeholder:text-black-200 tracking-wider"
              placeholder="Search for products..."
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Icons */}
        <div className="flex items-center">
          {/* Currency changer */}
          <div>
            <select
              name="cars"
              id="cars"
              className="border-none bg-transparent mr-4 font-out-fit
              text-yellow w-[50px] text-sm outline-none"
            >
              <option value="volvo">USD</option>
              <option value="saab">NG</option>
              <option value="mercedes">EUR</option>
              <option value="audi">TL</option>
            </select>
          </div>
          {/* cart */}
          <Link to="/cart">
            <StyledBadge
              className="mr-5 cursor-pointer"
              showZero
              badgeContent={counter}
              color="secondary"
            >
              <div
                className={`bg-lightYellow w-[43px] h-[43px] rounded-2xl
                flex justify-center items-center relative ${cartActive}   
                hover:border-2 border-yellow`}
              >
                <LocalMallRoundedIcon
                  fontSize="large"
                  className="text-yellow"
                />
              </div>
            </StyledBadge>
          </Link>
          {/* savelater */}
          <Link to="/saveLater">
            <div
              className={`bg-lightYellow w-[43px] h-[43px] rounded-2xl
            flex justify-center items-center relative mr-4 cursor-pointer
            ${savelaterActive} hover:border-2 border-yellow`}
            >
              <FavoriteRoundedIcon fontSize="large" className="text-yellow" />
            </div>
          </Link>
          {/* profile */}
          <div className="relative">
            <div
              className={`bg-lightYellow w-[43px] h-[43px] rounded-2xl
            flex justify-center items-center relative mr-4 cursor-pointer
            hover:border-2 border-yellow ${
              showProfile && 'border-2 border-yellow'
            }`}
              onClick={() => setShowProfile(!showProfile)}
            >
              <FaceRoundedIcon fontSize="large" className="text-yellow" />
            </div>
            {/* Profile hover */}
            {showProfile && (
              <div
                className="w-[220px] bg-ash shadow-md text-black-200
                text-lg flex-col absolute right-4 top-[62px] rounded-xl border
               border-stone-700"
              >
                <p className="text-lg px-3.5 opacity-[0.7] py-2 shadow-sm">
                  {' '}
                  Welcome Back!{' '}
                </p>
                <p
                  className="border-b border-stone-600 px-3.5 py-3 cursor-pointer
                 hover:text-charcoal"
                >
                  Account{' '}
                </p>
                <p
                  className="border-b border-stone-600 px-3.5 py-3 cursor-pointer
                hover:text-charcoal"
                >
                  {' '}
                  Profile{' '}
                </p>
                {/* <p
                  className="text-darkOrange border-stone-600 px-3.5 py-3
                  cursor-pointer"
                >
                  {' '}
                  Log Out{' '}
                </p> */}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
