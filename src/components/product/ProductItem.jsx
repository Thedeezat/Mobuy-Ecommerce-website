import React, { useState } from 'react'

import useFetch from '../Api/useFetch'

import Rating from '@mui/material/Rating'

import Button from '@mui/material/Button'

import Loader from '../Loader'

import Error from '../Error'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

import Snackbar from '@mui/material/Snackbar'

import Slide from '@mui/material/Slide'

import { SuccessSnackbar } from '../Snackbar'

function TransitionLeft(props) {
  return <Slide {...props} direction="right" />
}

export default function ProductItem({ productImage_num }) {
  const [currency, setCurrency] = useState('$')
  const [open, setOpen] = useState(false)
  const [transition, setTransition] = useState(undefined)

  const { data: products, loading, error } = useFetch(
    'https://api.escuelajs.co/api/v1/products',
  )

  //   const handleSnacbarClick = (Transition) => () => {
  //     setTransition(() => Transition)
  //     setOpen(true)
  //   }
  //   const handleSnacbarClose = () => {
  //     setOpen(false)
  //   }

  return (
    <section className="pt-4 grid grid-cols-4 gap-4 text-black-200 ">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products
        ? products.map((product) => (
            <div
              key={product.id}
              className={`pb-4 h-[350px] w-[305px] bg-stone-500 ${
                product.id >= 50 ? 'hidden' : ''
              } rounded-lg rounded-t-2xl overflow-hidden`}
            >
              {/* Svaelater */}
              <div className="relative">
                <SuccessSnackbar
                  children={
                    <>
                      {' '}
                      <div
                        className="absolute bg-white-600 flex
                       rounded-full w-[28px] h-[28px] shadow-md group
                       items-center justify-center right-1 top-1 cursor-pointer
                        "
                        //   onClick={handleSnacbarClick(TransitionLeft)}
                      >
                        <FavoriteBorderOutlinedIcon
                          className="text-yellow
                    group-hover:text-black-200"
                        />
                      </div>
                    </>
                  }
                />
              </div>
              {/* Image */}
              <img
                src={product.images[productImage_num]}
                className="h-7.2 w-full object-cover rounded-2xl
                 bg-stone-600 border-none"
              />{' '}
              {/* Description */}
              <div className="pt-3.5 px-3">
                <h3 className="text-sm"> {product.title} </h3>
                {/* price */}
                <div
                  className="flex items-center justify-between
                   pt-2"
                >
                  <h3 className="text-base text-black-100">
                    {' '}
                    {currency}
                    {product.price}{' '}
                  </h3>
                  <h4
                    className="line-through tracking-wider 
                    text-sm opacity-[0.8]"
                  >
                    {' '}
                    {currency}
                    {product.price + 70}{' '}
                  </h4>
                </div>
                {/* Rating */}
                <Rating name="read-only" className="pt-1" value="4" readOnly />
                {/* Add to cart */}
                <Button
                  variant="outlined"
                  className="relative top-2"
                  sx={{
                    boxShadow: 'none',
                    border: '1.2px solid rgba(230, 155, 0, 0.5)',
                    width: '100%',
                    height: '35px',
                    fontFamily: 'outfit',
                    fontSize: '11px',
                    color: '#333333',
                    borderRadius: '10px',
                    '&:hover': {
                      background: 'rgba(230, 155, 0, 0.2)',
                      boxShadow: 'none',
                      border: '1.2px solid rgba(230, 155, 0, 0.5)',
                    },
                  }}
                >
                  {' '}
                  Add to cart{' '}
                </Button>
              </div>
            </div>
          ))
        : ''}
      {/* Snackbar */}
      {/* <Snackbar
        autoHideDuration={3000}
        open={open}
        onClose={handleSnacbarClose}
        TransitionComponent={transition}
        message="I love snacks"
        key={transition ? transition.name : ''}
      /> */}
    </section>
  )
}
