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

import AccountCircleIcon from '@mui/icons-material/AccountCircle'

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
  const showProfile = false
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
              <h3 className="text-2xl lg:text-3xl 2xl:text-5xl"> Mobuy </h3>
            </div>
          </Link>
        </div>
        {/* Search bar */}
        <div
          className="pt-1 col-span-4 2xl:col-span-5 2xl:ml-6
          relative flex items-center"
        >
          <CiSearch
            className="md:flex md:w-3.5 md:h-3.5 md:right-3 2xl:w-4 2xl:h-4 2xl:right-4
            right-1 w-2 h-2 text-yellow absolute"
          />
          <label htmlFor="search-bar"></label>
          <input
            type="text"
            id="search-bar"
            className="md:h-[55px] md:text-sm md:px-4 2xl:h-[70px] 2xl:text-base
              w-full h-5.5 border-none outline-none rounded-xl bg-stone-400 
              px-3 pr-4 text-xxs font-out-fit placeholder:text-black-200 tracking-wider"
            placeholder="Search for products"
            onChange={handleChange}
          />
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden col-span-5
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
              className="2xl:text-lg 2xl:w-[60px] 2xl:h-[60px]
              border-none bg-transparent mr-4 font-out-fit
              text-yellow w-[50px] h-[50px] text-sm outline-none"
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
              className="2xl:scale-[1.4] 2xl:mr-6.1
              cursor-pointer mr-5 scale-[1]"
              showZero
              badgeContent={counter}
              color="secondary"
            >
              <div
                className={`
                bg-lightYellow w-[43px] h-[43px] rounded-2xl
                flex justify-center items-center relative ${cartActive}   
                hover:border-2 border-yellow scale-[1]`}
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
              className={`2xl:scale-[1.4] 2xl:mr-6.1
              bg-lightYellow w-[43px] h-[43px] rounded-2xl scale-[1]
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
                className={`2xl:scale-[1.4] 2xl:mr-6.1
                bg-lightYellow w-[43px] h-[43px] rounded-2xl
                  flex justify-center items-center relative mr-4 cursor-pointer
                  hover:border-2 border-yellow ${
                    anchorEl && 'border-2 border-yellow'
                  }`}
                onClick={handleClick}
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
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
                  mt: 3,
                  width: '220px',
                  background: '#eceff2',
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
                    bgcolor: '#eceff2',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <p className="2xl:text-xl text-lg px-3.5 opacity-[0.7] py-2 shadow-sm">
                {' '}
                Hi, {currentUser ? `${firstName}` : ''}
              </p>
              <MenuItem className="opacity-[0]"></MenuItem>

              {/* Profile */}
              {currentUser && (
                <Link to="/profile">
                  <MenuItem>
                    <div className="flex items-center py-1">
                      <AccountCircleIcon
                        fontSize="large"
                        className="mr-1 text-black-200 opacity-[0.7]"
                      />
                      <span
                        className="2xl:text-tiny cursor-pointer font-out-fit
                        flex items-center text-base text-black-200"
                      >
                        My Profile
                      </span>
                    </div>
                  </MenuItem>
                </Link>
              )}
              <Divider />

              {/* Login */}
              <Link to="/account/login">
                <MenuItem>
                  <div className="flex items-center py-1">
                    <AccountCircleIcon
                      fontSize="large"
                      className="mr-1 text-black-200 opacity-[0.7]"
                    />
                    <span
                      className="2xl:text-tiny py-1 cursor-pointer font-out-fit
                      flex items-center text-base text-black-200"
                    >
                      Login / Signup
                    </span>
                  </div>
                </MenuItem>
              </Link>
              <Divider />
              {/* Logout */}
              {currentUser && (
                <div onClick={handleLogout}>
                  <MenuItem>
                    <div className="flex items-center py-1">
                      <ListItemIcon>
                        <Logout fontSize="large" className="text-darkOrange" />
                      </ListItemIcon>
                      <span
                        className="2xl:text-tiny text-darkOrange border-stone-600 py-[4px]
                        cursor-pointer text-base flex items-center font-out-fit"
                      >
                        Log Out
                        <br />
                        {error && (
                          <span className="text-xs text-darkOrange pt-3">
                            Failed to log out.. ☹️
                          </span>
                        )}
                      </span>
                    </div>
                  </MenuItem>
                </div>
              )}
            </Menu>
          </div>
        </div>
      </nav>
    </>
  )
}
