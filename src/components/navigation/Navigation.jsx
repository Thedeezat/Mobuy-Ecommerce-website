import React, { useContext, useState } from 'react'

import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded'

import { CiSearch } from 'react-icons/ci'

import { styled } from '@mui/material/styles'

import Badge from '@mui/material/Badge'

import FaceRoundedIcon from '@mui/icons-material/FaceRounded'

import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'

import { Link, useHistory } from 'react-router-dom'

import { productContext } from '../../App'

import debounce from 'lodash.debounce'

import { AuthContext } from '../Auth/AuthContext'

import Tooltip from '@mui/material/Tooltip'

import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import Logout from '@mui/icons-material/Logout'

export default function Navigation({
  counter,
  currency,
  cartActive,
  savelaterActive,
  firstName,
}) {
  const { setSearchItem } = useContext(productContext)
  const [showProfile, setShowProfile] = useState(false)
  const { currentUser, logOut } = AuthContext()
  const [error, setError] = useState('')
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const genericHamburgerLine = `h-[1.5px] w-[24px] my-[2px] rounded-lg bg-black transition
   ease transform duration-300 bg-black-200`

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

  const handleLogout = async () => {
    setError('')

    try {
      await logOut()
      history.push('/account/login')
    } catch {
      setError('Failed to log out')
    }
  }

  const toolTip = (text) => (
    <span className="text-xs font-out-fit padding-1">{text}</span>
  )

  return (
    <>
      {/* navigation */}
      <nav
        className="md:py-5.5 md:grid-col-5 lg:grid-cols-8 xl:grid-cols-11
        grid grid-col-3 grid-flow-col py-4 text-black-200 gap-3"
      >
        {/* Logo */}
        <div className=" flex items-center ">
          <Link to="/">
            <div className="cursor-pointer">
              <h3 className="text-2xl md:text-3xl"> Mobuy </h3>
            </div>
          </Link>
        </div>
        {/* Search bar */}
        <div
          className="pt-1 col-span-4
            relative flex items-center "
        >
          <CiSearch
            className="md:flex md:w-3.5 md:h-3.5 md:right-3
              right-1 w-2 h-2 text-yellow absolute"
          />
          <label htmlFor="search-bar"></label>
          <input
            type="text"
            id="search-bar"
            className="md:h-[55px] md:text-sm md:px-4
              w-full h-5.5 border-none outline-none rounded-xl bg-stone-400 
              px-3 pr-4 text-xxs font-out-fit placeholder:text-black-200 tracking-wider"
            placeholder="Search for products"
            onChange={handleChange}
          />
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden  col-span-5
          flex flex-col justify-center items-end group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? 'rotate-45 translate-y-[6px] bg-charcoal'
                : 'group-hover:bg-blue'
            }`}
          ></div>
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? 'opacity-0' : 'group-hover:bg-blue'
            }`}
          ></div>
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? '-rotate-45 -translate-y-[6px] bg-charcoal'
                : 'group-hover:bg-blue'
            }`}
          ></div>
        </button>
        {/* Icons */}
        <div className="col-span-7 hidden md:flex items-center justify-end ">
          {/* Currency changer */}
          <div>
            <select
              name="currency"
              id="currency"
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
            <Tooltip title={toolTip('My Account')}>
              <div
                className={`bg-lightYellow w-[43px] h-[43px] rounded-2xl
                  flex justify-center items-center relative mr-4 cursor-pointer
                  hover:border-2 border-yellow ${
                    showProfile && 'border-2 border-yellow'
                  }`}
                onClick={handleClick}
                // onClick={() => setShowProfile(!showProfile)}
              >
                <FaceRoundedIcon fontSize="large" className="text-yellow" />
              </div>
            </Tooltip>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>

            {/* Profile hover */}
            {/* {showProfile && (
              <div
                className="w-[220px] bg-ash shadow-md text-black-200
                text-lg flex-col absolute right-0 top-[62px] rounded-xl border
               border-stone-700 z-50"
              >
                <p className="text-lg px-3.5 opacity-[0.7] py-2 shadow-sm">
                  {' '}
                  Hi{currentUser ? `,${firstName}` : ''}
                </p>
                {currentUser && (
                  <Link to="/profile">
                    <p
                      className="border-b border-stone-600 px-3.5 py-3 cursor-pointer
                     hover:bg-stone-700 flex items-center"
                    >
                      <span>My Profile</span>{' '}
                    </p>
                  </Link>
                )}

                <Link to="/account/login">
                  <p
                    className="border-b border-stone-600 px-3.5 py-3 cursor-pointer
                    hover:bg-stone-700 flex items-center"
                  >
                    <span> Login / Signup </span>{' '}
                  </p>
                </Link>
                {currentUser && (
                  <>
                    <p
                      className="text-darkOrange border-stone-600 px-3.5 py-3
                      cursor-pointer hover:bg-stone-700 flex items-center"
                      onClick={handleLogout}
                    >
                      <LogoutIcon
                        className="mr-1"
                        sx={{ width: '18px', height: '18px' }}
                      />{' '}
                      <span> Log Out</span>
                      <br />
                      {error && (
                        <span className="text-xs text-darkOrange pt-3">
                          Failed to log out.. ☹️
                        </span>
                      )}
                    </p>
                  </>
                )}
              </div>
            )} */}
          </div>
          {/* {currentUser && (
            <p className="text-base opacity-[0.7] py-2 "> Welcome Jane! </p>
          )} */}
        </div>
      </nav>
    </>
  )
}
