import React, { useState } from 'react'

import Snackbar from '@mui/material/Snackbar'

import MuiAlert from '@mui/material/Alert'

import IconButton from '@mui/material/IconButton'

import CloseIcon from '@mui/icons-material/Close'

import { Link } from 'react-router-dom'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export function CustomSnackbar({ children, message, success, button_text }) {
  const [open, setOpen] = useState(false)

  const handleClickVariant = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  const snackbar_text = (
    <div className="flex flex-col ml-1 font-normal">
      <span className="md:text-sm text-xs font-out-fit">{message}</span>
      <Link to="/cart">
        <button
          className="md:text-xs md:w-[80px]
          border border-white-100 outline-none bg-transparent
          w-[70px] mt-1 rounded-md py-[1px] text-xxs font-out-fit 
          hover:bg-darkYellow hover:border-yellow tracking-wider"
        >
          {' '}
          {button_text}
        </button>
      </Link>
    </div>
  )
  const action = (
    <React.Fragment>
      <IconButton
        size="medium"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="medium" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <>
      <div onClick={handleClickVariant}>{children}</div>

      {success ? (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          sx={{ zIndex: '30px' }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: 240, opacity: '0.1' }}
          >
            {snackbar_text}
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar
          sx={{ zIndex: '30px', width: 240 }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
          action={action}
        />
      )}
    </>
  )
}
