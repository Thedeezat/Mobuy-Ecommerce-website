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
  const inputStyle = `md:text-sm 2xl:text-base 2xl:h-[50px]
  placeholder:text-black-200 placeholder:opacity-[0.7] 
  text-xs px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
  rounded-xl border border-stone-400 font-out-fit focus:outline
  focus:border-transparent outline-1 outline-stone-200
  hover:border-stone-200`

  return (
    <>
      {saveChanges ? (
        <div className="pb-4 bg-stone-500 rounded-xl">
          {/* heading */}
          <div
            className="md:px-4 border-b border-stone-600 flex justify-between py-3
            px-3.5"
          >
            <h3 className="2xl:text-xl md:text-lg text-base">
              {' '}
              Delivery Address{' '}
            </h3>
            <button
              className="2xl:w-[110px] 2xl:h-[40px] md:w-[110px] md:h-[35px] md:text-sm
              bg-stone-200 w-[85px] h-[30px] rounded-md 
             text-white-300 text-xs hover:bg-charcoal"
              onClick={handleEditAdress}
            >
              Edit Address
            </button>
          </div>

          {/* Adress section */}
          <div
            className="max-w-[410px] md:mx-4 pb-2
             border border-stone-700 rounded-md mt-4 mx-3.5"
          >
            {/* Heading */}
            <div className="md:px-4 border-b border-stone-700 py-2 px-3.5 mb-2 ">
              <p className="2xl:text-base md:text-sm text-[13px] text-black-200">
                <span> Pickup Destination </span>
              </p>
            </div>

            <div className="md:px-4 flex flex-col gap-y-3.5 px-3.5">
              {/* Name */}
              <p className="2xl:text-base md:text-sm text-xs flex items-center">
                <Person2OutlinedIcon
                  fontSize="medium"
                  className="mr-2 text-darkYellow 2xl:scale-[1.2]"
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
              <p className="2xl:text-base md:text-sm text-xs flex items-start">
                <LocationOnOutlinedIcon
                  fontSize="medium"
                  className="mr-2 text-darkYellow 2xl:scale-[1.2]"
                />
                <span>
                  {getCountry}, {getState}
                  <br />
                  {streetAddress}, {getCity} <br />
                  {dirction}
                </span>
              </p>

              {/* Phone */}
              <p className="2xl:text-base md:text-sm text-xs flex items-center">
                <LocalPhoneOutlinedIcon
                  fontSize="medium"
                  className="mr-2 text-darkYellow 2xl:scale-[1.2]"
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
            className="2xl:h-12 bg-stone-500 w-full h-11 flex flex-col
            justify-center rounded-xl"
            onSubmit={handleSubmit}
          >
            {/* heading */}
            <div className="md:md:px-4 border-b border-stone-600 py-3 px-3.5">
              <h3 className="2xl:text-2xl text-lg"> Add Delivery Address </h3>
            </div>

            {/* Forms */}
            <div className="md:px-4 px-3.5 pt-4 text-base opacity-[0.8] flex flex-col gap-y-3">
              {/* Phone Number */}
              <div className="relative flex flex-col ">
                <label
                  htmlFor="number"
                  className="2xl:text-base lg:text-sm text-xs text-black-200"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  onChange={(e) => setPhoneNuber(e.target.value)}
                  value={phoneNumber}
                  placeholder="Mobile Number"
                  className={inputStyle}
                />
              </div>
              {/* Street address */}
              <div className="relative flex flex-col">
                <label
                  htmlFor="street-address"
                  className="2xl:text-base lg:text-sm text-xs text-black-200"
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
                  className={inputStyle}
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

                  <label
                    htmlFor=" Country"
                    className="2xl:text-base lg:text-sm text-xs text-black-200"
                  >
                    Country
                  </label>
                  <ArrowDropDownOutlinedIcon className="md:top-[43px] absolute right-2 top-[40px]" />
                  <select
                    onChange={(e) => handleCountryChange(e)}
                    name="country"
                    id="country"
                    className={`md:text-sm md:px-3.5
                    placeholder:text-black-200 placeholder:opacity-[0.7] 
                    text-xs px-3 my-1 w-full h-[40px] bg-transparent text-black-100 
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
                  <label
                    htmlFor="State"
                    className="2xl:text-base lg:text-sm text-xs text-black-200"
                  >
                    State
                  </label>
                  <ArrowDropDownOutlinedIcon className="md:top-[43px] absolute right-2 top-[40px]" />
                  <select
                    name="states"
                    id="states"
                    onChange={(e) => handleStateChange(e)}
                    className={`md:text-sm md:px-3.5
                    placeholder:text-black-200 placeholder:opacity-[0.7] 
                    text-xs px-3 my-1 w-full h-[40px] bg-transparent text-black-100 
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
                  <label
                    htmlFor="City"
                    className="2xl:text-base lg:text-sm text-xs text-black-200"
                  >
                    City
                  </label>
                  <ArrowDropDownOutlinedIcon className="md:top-[43px] absolute right-2 top-[40px]" />
                  <select
                    name="city"
                    id="city"
                    className={`md:text-sm md:px-3.5
                    placeholder:text-black-200 placeholder:opacity-[0.7] 
                    text-xs px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
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
                  <label
                    htmlFor="Direction"
                    className="2xl:text-base lg:text-sm text-xs text-black-200"
                  >
                    Direction (Optional)
                  </label>
                  <input
                    type="text"
                    id="Direction"
                    name="Direction"
                    onChange={(e) => setDirection(e.target.value)}
                    value={dirction}
                    placeholder="Enter Direction"
                    className={`md:text-sm md:px-3.5
                    placeholder:text-black-200 placeholder:opacity-[0.7] 
                    text-xs px-3.5 my-1 w-full h-[40px] bg-transparent text-black-100 
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
                  className="2xl:h-[55px] 
                   w-full h-[45px] bg-stone-200
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
