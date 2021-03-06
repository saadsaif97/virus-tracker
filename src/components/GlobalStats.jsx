import React, { useState, useEffect } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { Grid } from '@material-ui/core'

import Stats from './Stats'
import DoughnetGraph from './DoughnetGraph'

const GlobalStats = () => {
  const [data, setData] = useState({})
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    async function getData() {
      setFetching(true)
      const response = await fetch('https://covid19.mathdro.id/api')
      const data = await response.json()
      const { confirmed, recovered, deaths } = data
      setData({ confirmed, recovered, deaths })
      setFetching(false)
    }

    getData()
  }, [])

  if (!fetching && data.confirmed && data.recovered && data.deaths) {
    return (
      <>
        <h1>Global Stats</h1>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stats data={data} />
          </Grid>
          <Grid item xs={12} md={6}>
            <DoughnetGraph data={data} />
          </Grid>
        </Grid>
      </>
    )
  } else {
    return (
      <>
        <h1>Global Stats</h1>
        <Skeleton animation='wave' varient='text' style={{ height: '200px' }} />
      </>
    )
  }
}

export default GlobalStats
