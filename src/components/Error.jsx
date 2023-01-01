import React from 'react'

import Alert from '@mui/material/Alert'

export const AlertError = ({ styles, error }) => (
  <Alert
    className={styles}
    severity="error"
    sx={{ fontSize: '13px', fontFamily: 'Outfit', color: '#000000' }}
  >
    {error}
  </Alert>
)

export function TextError({ error }) {
  return (
    <div className="text-black-200 pt-4 text-lg">
      {error}
      {''} ☹️
    </div>
  )
}
