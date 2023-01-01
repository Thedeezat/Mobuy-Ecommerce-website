import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'

export default function Spinner({ color, styles }) {
  return (
    <CircularProgress
      size="20px"
      sx={{ color: { color } }}
      className={styles}
    />
  )
}
