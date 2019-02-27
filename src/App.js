import React, { useState } from 'react'

export default function App () {
  const [userQuery, setUserQuery] = useState('')

  const updateUserQuery = event => {
    setUserQuery(event.target.value)
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank')
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery()
    }
  }

  return (
    <div className='App'>
      <h1>Hi Mitch</h1>
      <div className='form'>
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Serach</button>
      </div>
    </div>
  )
}
