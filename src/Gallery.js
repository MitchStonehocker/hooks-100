// src/Gallery.js

import React, { useState, useEffect } from 'react'
import PICTURES from './data/pictures'

const SECONDS = 1000
const minDelay = 1 * SECONDS
const minIncrement = 1

export default function Gallery () {
  const [index, setIndex] = useState(0)
  const [delay, setDelay] = useState(3 * SECONDS)
  const [increment, setIncrement] = useState(1)

  useEffect(
    () => {
      console.log('>>>-Gallery-{delay,increment}->', { delay, increment })

      const interval = setInterval(() => {
        setIndex(storedIndex => {
          return (storedIndex + increment) % PICTURES.length
        })
      }, delay)
      return () => {
        clearInterval(interval)
      }
    },
    [delay, increment]
  )

  const updateDelay = event => {
    const delay = Number(event.target.value * SECONDS)
    setDelay(delay < minDelay ? minDelay : delay)
  }

  const updateIncrement = event => {
    const increment = Number(event.target.value)
    setIncrement(increment < minIncrement ? minIncrement : increment)
  }

  //   console.log('>>>-Gallery-index->', index)

  return (
    <div className='Gallery'>
      <img src={PICTURES[index].image} alt='gallery' />
      <div>
        Gallery transition delay (seconds):
        <input type='number' onChange={updateDelay} />
      </div>
      <div>
        Gallery increment:
        <input type='number' onChange={updateIncrement} />
      </div>
    </div>
  )
}
