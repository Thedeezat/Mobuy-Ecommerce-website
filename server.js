const stripe = require('stripe')(
  'sk_test_51M948fFLqtqTiWcL4HqUNcnUPbmoiVKGkbLPgcGaCAPvwHL6lucuOTpt8etvtiEICTzbz3EeXNbHYoZTNPCyXNCi00eq8pztZg',
)
const express = require('express')
const app = express()
const router = express.Router()

app.use(express.static('public'))

const YOUR_DOMAIN = 'http://localhost:3000'

router.post('/create-checkout-session', async (req, res) => {
  const { priceId } = req.body

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'prod_N8IFCiZNrxJKrx',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    })

    res.redirect(303, session.url)
  } catch {
    res.status(400).json({ error: e.message })
  }
})

app.listen(3000, () => console.log('server is running'))
