import React, { useState, useEffect } from 'react'

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'

import useFetch from '../Api/useFetch'

import Spinner from '../Loader/Spinner'

import Location from './Location'

export default function DeliveryAdress({
  first_name,
  last_name,
  setDeliveryAddress,
}) {
  const { data: location, loading, error } = useFetch(
    'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json',
  )
  const [saveChanges, setSaveChanges] = useState(false)
  const [state, setState] = useState([])
  const [city, setCity] = useState([])
  const [changesLoading, setLoading] = useState(false)
  const {
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
  } = Location()

  const country = [
    ...new Set(location ? location.map((item) => item.country) : ''),
  ]
  country.sort()

  // Storage
  useEffect(() => {
    localStorage.setItem('phoneNumber', JSON.stringify(phoneNumber))
    localStorage.setItem('StreetAddress', JSON.stringify(streetAddress))
    localStorage.setItem('country', JSON.stringify(getCountry))
    localStorage.setItem('state', JSON.stringify(getState))
    localStorage.setItem('city', JSON.stringify(getCity))
    localStorage.setItem('direction', JSON.stringify(dirction))
  }, [phoneNumber, streetAddress, getCountry, getState, getCity, dirction])

  const handleCountryChange = (e) => {
    setState('Select State')
    setCity('Select City')
    const Singlecountry = location.filter(
      (item) => item.country === e.target.value,
    )
    const states = [...new Set(Singlecountry.map((item) => item.subcountry))]
    states.sort()
    setState(states)

    setCountry(e.target.value)
  }

  const handleStateChange = (e) => {
    let singleCity = location.filter(
      (item) => item.subcountry === e.target.value,
    )
    singleCity.sort()
    setCity(singleCity)

    setGetState(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSaveChanges(!saveChanges)
      setDeliveryAddress(true)
    }, 2000)
  }
  clearTimeout(handleSubmit)

  const handleEditAdress = () => {
    setSaveChanges(!saveChanges)
  }

  return (
    <>
      {saveChanges ? (
        <div className="w-13 h-7.8 bg-stone-500 rounded-xl">
          {/* heading */}
          <div
            className="border-b border-stone-600 flex justify-between py-3
            px-4"
          >
            <h3 className="text-lg"> Delivery Address </h3>
            <button
              className="bg-stone-200 w-[110px] h-[35px] rounded-md
            text-white-300 text-sm hover:bg-charcoal"
              onClick={handleEditAdress}
            >
              Edit Address
            </button>
          </div>

          {/* Adress section */}
          <div
            className="w-8 h-7.3 border border-stone-600 rounded-md
             mt-4 mx-4"
          >
            {/* Heading */}
            <div className="border-b border-stone-600 py-1 px-4 mb-2 ">
              <p className="text-black-200 text-sm">
                <span> Pickup Destination </span>
              </p>
            </div>

            <div className="flex flex-col gap-y-3.5 px-4">
              {/* Name */}
              <p className="text-sm flex items-center">
                <Person2OutlinedIcon
                  fontSize="medium"
                  className="mr-2 text-darkYellow"
                />
                <span>
                  {first_name || last_name ? (
                    [first_name, ' ', last_name]
                  ) : (
                    <span className="opacity-[0.4]">No name added yet</span>
                  )}
                </span>
              </p>

              {/* Location */}
              <p className="text-sm flex items-start">
                <LocationOnOutlinedIcon
                  fontSize="medium"
                  className="mr-2 text-darkYellow"
                />
                <span>
                  {getCountry}, {getState}
                  <br />
                  {streetAddress}, {getCity} <br />
                  {dirction}
                </span>
              </p>

              {/* Phone */}
              <p className="text-sm flex items-center">
                <LocalPhoneOutlinedIcon
                  fontSize="medium"
                  className="mr-2 text-darkYellow"
                />
                <span> {phoneNumber} </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Form */}
          <form
            className="bg-stone-500 w-13 h-11 flex flex-col
            justify-center rounded-xl"
            onSubmit={handleSubmit}
          >
            {/* heading */}
            <div
              className="border-b border-stone-600 py-3
            px-4"
            >
              <h3 className="text-lg"> Add Delivery Address </h3>
            </div>

            {/* Forms */}
            <div className="px-4 pt-4 text-base opacity-[0.8] flex flex-col gap-y-3">
              {/* Phone Number */}
              <div className="relative flex flex-col ">
                <label htmlFor="number" className="text-sm text-black-200">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  onChange={(e) => setPhoneNuber(e.target.value)}
                  value={phoneNumber}
                  placeholder="Mobile Number"
                  className={`placeholder:text-black-200 placeholder:opacity-[0.7] 
                text-sm px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
                rounded-xl border border-stone-400 font-out-fit focus:outline
                focus:border-transparent outline-1 outline-stone-200
                hover:border-stone-200`}
                />
              </div>
              {/* Street address */}
              <div className="relative flex flex-col">
                <label
                  htmlFor="street-address"
                  className="text-sm text-black-200"
                >
                  Street address
                </label>
                <input
                  type="text"
                  id="street-address"
                  name="street-address"
                  onChange={(e) => setStreetAddress(e.target.value)}
                  value={streetAddress}
                  placeholder="Enter delivery address"
                  className={`placeholder:text-black-200 placeholder:opacity-[0.7] 
                   text-sm px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
                   rounded-xl border border-stone-400 font-out-fit focus:outline
                   focus:border-transparent outline-1 outline-stone-200
                  hover:border-stone-200`}
                />
              </div>
              {/* Country and state */}
              <div className="flex justify-between items-center gap-x-5">
                {/* country */}
                <div className="relative input-states flex flex-col w-[50%]">
                  {/* Loading */}
                  {loading && (
                    <div className="absolute text-xs top-[2px] ml-2 left-6">
                      (Loading...){' '}
                    </div>
                  )}
                  {/* Error */}
                  {error && (
                    <div className="absolute text-xs top-[2px] ml-2 left-6">
                      {error}
                    </div>
                  )}

                  <label htmlFor=" Country" className="text-sm text-black-200">
                    Country
                  </label>
                  <ArrowDropDownOutlinedIcon className="absolute right-2 top-[43px]" />
                  <select
                    onChange={(e) => handleCountryChange(e)}
                    name="country"
                    id="country"
                    className={`placeholder:text-black-200 placeholder:opacity-[0.7] 
                    text-sm px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
                    rounded-xl border border-stone-400 font-out-fit focus:outline
                    focus:border-transparent outline-1 outline-stone-200
                    hover:border-stone-200`}
                  >
                    <option>
                      {getCountry ? getCountry : 'Select Country'}
                    </option>
                    {country?.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                {/* state */}
                <div className="relative input-states flex flex-col w-[50%]">
                  <label htmlFor="State" className="text-sm text-black-200">
                    State
                  </label>
                  <ArrowDropDownOutlinedIcon className="absolute right-2 top-[43px]" />
                  <select
                    name="states"
                    id="states"
                    onChange={(e) => handleStateChange(e)}
                    className={`placeholder:text-black-200 placeholder:opacity-[0.7] 
                    text-sm px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
                    rounded-xl border border-stone-400 font-out-fit focus:outline
                    focus:border-transparent outline-1 outline-stone-200
                    hover:border-stone-200`}
                  >
                    <option>{getState ? getState : 'Select State'}</option>

                    {state !== 'Select State' &&
                      state?.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              {/* city / direction */}
              <div className="flex justify-between items-center gap-x-5">
                {/* City */}
                <div className="relative input-states flex flex-col w-[50%]">
                  <label htmlFor="City" className="text-sm text-black-200">
                    City
                  </label>
                  <ArrowDropDownOutlinedIcon className="absolute right-2 top-[43px]" />
                  <select
                    name="city"
                    id="city"
                    className={`placeholder:text-black-200 placeholder:opacity-[0.7] 
                    text-sm px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
                    rounded-xl border border-stone-400 font-out-fit focus:outline
                    focus:border-transparent outline-1 outline-stone-200
                    hover:border-stone-200`}
                    onChange={(e) => setGetCity(e.target.value)}
                  >
                    <option>{getCity ? getCity : 'Select City'}</option>
                    {city !== 'Select City' &&
                      city?.map((item, index) => (
                        <option key={index} value={item?.name}>
                          {item?.name}
                        </option>
                      ))}
                  </select>
                </div>
                {/* Direction */}
                <div className="relative input-states flex flex-col w-[50%]">
                  <label htmlFor="Direction" className="text-sm text-black-200">
                    Direction (Optional)
                  </label>
                  <input
                    type="text"
                    id="Direction"
                    name="Direction"
                    onChange={(e) => setDirection(e.target.value)}
                    value={dirction}
                    placeholder="Enter Direction"
                    className={`placeholder:text-black-200 placeholder:opacity-[0.7] 
                    text-sm px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
                    rounded-xl border border-stone-400 font-out-fit focus:outline
                    focus:border-transparent outline-1 outline-stone-200
                    hover:border-stone-200`}
                  />
                </div>
              </div>
              {/* End of state /city */}

              {/* Login btn */}
              <div>
                <button
                  type="submit"
                  disabled={changesLoading}
                  className="w-full h-[45px] bg-stone-200
                text-white-300 rounded-xl text-base font-out-fit
                    tracking-wide hover:bg-charcoal relative flex 
                    justify-center items-center my-3"
                >
                  {' '}
                  {changesLoading ? '' : <span> Update Changes</span>}
                  {changesLoading && (
                    <Spinner color="#D3D3D3" styles="absolute" />
                  )}
                </button>
              </div>
              {/* end of Login btn */}
            </div>
          </form>
        </>
      )}
    </>
  )
}
