// src/joke.js

import React from 'react'
import { useFetch } from './hooks'

export default function Joke () {
  const { setup, punchline } = useFetch(
    'https://official-joke-api.appspot.com/jokes/random',
    {}
  )

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
