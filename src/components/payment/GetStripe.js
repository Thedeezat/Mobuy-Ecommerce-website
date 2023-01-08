import { loadStripe } from '@stripe/stripe-js'

let stripePromise

export default function GetStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}
