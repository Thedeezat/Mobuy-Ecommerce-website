import { useState } from 'react'

export default function Location() {
  const [dirction, setDirection] = useState(() => {
    const savedDirection = localStorage.getItem('direction')
    const parsedDirection = JSON.parse(savedDirection)
    return parsedDirection || ''
  })

  const [phoneNumber, setPhoneNuber] = useState(() => {
    const savedItem = localStorage.getItem('phoneNumber')
    const parsedItem = JSON.parse(savedItem)
    return parsedItem || ''
  })
  const [streetAddress, setStreetAddress] = useState(() => {
    const savedAddress = localStorage.getItem('StreetAddress')
    const parsedAddress = JSON.parse(savedAddress)
    return parsedAddress || ''
  })

  const [getCountry, setCountry] = useState(() => {
    const savedCountry = localStorage.getItem('country')
    const parsedCountry = JSON.parse(savedCountry)
    return parsedCountry || ''
  })
  const [getState, setGetState] = useState(() => {
    const savedState = localStorage.getItem('state')
    const parsedState = JSON.parse(savedState)
    return parsedState || ''
  })
  const [getCity, setGetCity] = useState(() => {
    const savedCity = localStorage.getItem('city')
    const parsedCity = JSON.parse(savedCity)
    return parsedCity || ''
  })

  return {
    dirction,
    setDirection,
    phoneNumber,
    setPhoneNuber,
    streetAddress,
    setStreetAddress,
    getCountry,
    setCountry,
    getState,
    setGetState,
    getCity,
    setGetCity,
  }
}
