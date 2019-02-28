// src/Matrix.js

import React, { useState, useEffect } from 'react'

import MATRIX_FRAMES from './data/matrix'

const minDelay = 10
const minIncrement = 1

export default function Matrix () {
  const [index, setIndex] = useState(0)
  const [delay, setDelay] = useState(500)
  const [increment, setIncrement] = useState(5)

  useEffect(
    () => {
      const interval = setInterval(() => {
        setIndex(storedIndex => {
          return (storedIndex + 1) % MATRIX_FRAMES.length
        })
      }, delay)
      return () => clearInterval(interval)
    },
    [delay, increment]
  )

  const updateDelay = event => {
    const delay = Number(event.target.value)
    setDelay(delay < minDelay ? minDelay : delay)
  }

  const updateIncrement = event => {
    const increment = Number(event.target.value)
    setIncrement(increment < minIncrement ? minIncrement : increment)
  }

  //   console.log('>>>-Matrix-{delay,increment}->', { delay, increment })

  return (
    <div className='Matrix'>
      <img src={MATRIX_FRAMES[index]} alt='matrix-animation' />
      <div className='multiform'>
        <div>
          Frame transition delay (mili-seconds):
          <input type='number' onChange={updateDelay} />
        </div>
        <div>
          Frame increment:
          <input type='number' onChange={updateIncrement} />
        </div>
      </div>
    </div>
  )
}
