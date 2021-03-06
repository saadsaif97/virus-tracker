import React from 'react'

// components
import Header from './components/Header'
import GlobalStats from './components/GlobalStats'
import CountryStats from './components/CountryStats'

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <GlobalStats />
        <hr />
        <CountryStats />
      </div>
    </>
  )
}

export default App
