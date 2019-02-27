// src/joke.js

import React, { useEffect, useState } from 'react'

export default function Joke () {
  const [joke, setJoke] = useState({})

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then(res => res.json())
      .then(json => {
        console.log('joke', json)
        setJoke(json)
      })
  }, [])

  const { setup, punchline } = joke

  return (
    <div>
      <h3>Joke of the session</h3>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  )
}
