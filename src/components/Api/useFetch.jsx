import { useState, useEffect } from 'react'

import axios from 'axios'

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url)
        setData(response.data)
        setError(null)
      } catch (error) {
        setError(error.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [url])

  return { data, loading, error }
}
