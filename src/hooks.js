// src/hooks.js

import { useEffect, useState } from 'react'

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        // console.log('>>>-useFetch-result-json->', json)
        setResult(json)
      })
  }, [])
  return result
}
