import React from 'react'

export default function Error({ error }) {
  return (
    <div className="text-black-200 pt-4 text-lg">
      {error}
      {''} ☹️
    </div>
  )
}
