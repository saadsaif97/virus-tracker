import React from 'react'

const Stats = ({ data }) => {
  return (
    <div className='stats'>
      <h1>
        <span role='img' aria-label='sheep'>
          😀
        </span>
        <span className='rocovered'>Recovered: {data.recovered.value}</span>
      </h1>
      <h1>
        <span role='img' aria-label='sheep'>
          😷
        </span>
        <span className='confirmed'>Confirmed: {data.confirmed.value}</span>
      </h1>

      <h1>
        <span role='img' aria-label='sheep'>
          😵
        </span>
        <span className='deaths'>Deaths: {data.deaths.value}</span>
      </h1>
    </div>
  )
}

export default Stats
