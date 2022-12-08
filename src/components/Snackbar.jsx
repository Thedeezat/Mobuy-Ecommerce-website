import React from 'react'

// import { SnackbarProvider, useSnackbar } from 'notistack'

// ;<SnackbarProvider>
//   <SuccessSnackbar />
// </SnackbarProvider>

export function SuccessSnackbar({ children }) {
  //   const { enqueueSnackbar } = useSnackbar()

  //   const handleClick = () => {
  //     enqueueSnackbar('I love snacks.')
  //   }

  //   const handleClickVariant = (variant) => () => {
  //     enqueueSnackbar('This is a success message!', { variant })
  //   }

  return (
    <>
      {/* <SnackbarProvider /> */}
      <div>{children}</div>
    </>
  )
}
