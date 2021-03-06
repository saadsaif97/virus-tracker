import React from 'react'

const Stats = ({ data }) => {
  return (
    <div className='stats'>
      <h2>
        <span role='img' aria-label='sheep'>
          😀
        </span>
        <span className='rocovered'>Recovered: {data.recovered.value}</span>
      </h2>
      <h2>
        <span role='img' aria-label='sheep'>
          😷
        </span>
        <span className='confirmed'>Confirmed: {data.confirmed.value}</span>
      </h2>

      <h2>
        <span role='img' aria-label='sheep'>
          😵
        </span>
        <span className='deaths'>Deaths: {data.deaths.value}</span>
      </h2>
    </div>
  )
}

export default Stats
