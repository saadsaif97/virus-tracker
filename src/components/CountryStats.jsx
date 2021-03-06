import React, { useState, useEffect } from 'react'
import Stats from './Stats'
import Skeleton from '@material-ui/lab/Skeleton'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import { getCountriesWithAlpha2Code } from '../apis/coutries'
import DoughnetGraph from './DoughnetGraph'
import { Grid } from '@material-ui/core'

const CountryStats = () => {
  const [fetching, setFetching] = useState(false)
  const [country, setCountry] = useState('PK')
  const [flag, setFlag] = useState('https://restcountries.eu/data/pak.svg')
  const [data, setData] = useState(undefined)
  const [countriesWithCode, setCountriesCode] = useState([
    ['Pakistan', 'PK', 'https://restcountries.eu/data/pak.svg'],
  ])

  // useEffect(() => {
  //   async function setFlag() {
  //     const flag = await getFlag('PK')
  //     setFlag(flag)
  //   }
  //   setFlag()
  // }, [])

  useEffect(() => {
    async function setCountries() {
      const countries = await getCountriesWithAlpha2Code()
      setCountriesCode(countries)
    }
    setCountries()
  }, [])

  useEffect(() => {
    async function getData(country) {
      setFetching(true)
      const response = await fetch(
        `https://covid19.mathdro.id/api/countries/${country}`
      )
      if (response.status === 200) {
        const data = await response.json()
        setData(data)
      } else if (response.status === 404) {
        setData(undefined)
      }

      const countryFlag = countriesWithCode.filter(
        (c) => c[1] === country
      )[0][2]
      setFlag(countryFlag)

      setFetching(false)
    }
    getData(country)
  }, [country, countriesWithCode])

  function renderResults() {
    if (fetching) {
      return (
        <div>
          <Skeleton style={{ height: '300px' }} />
        </div>
      )
    } else if (data === undefined) {
      return (
        <div>
          <h1>
            <span role='img' aria-label='sheep'>
              😒
            </span>
            <span> Sorry, our virus api has not result for this country</span>
          </h1>
        </div>
      )
    } else {
      return (
        <>
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
    }
  }

  function renderInput() {
    if (fetching) {
      return <Skeleton />
    } else {
      return (
        <>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            {countriesWithCode.map((country, idx) => (
              <option key={idx} value={country[1]}>
                {country[0]}
              </option>
            ))}
          </select>
        </>
      )
    }
  }

  return (
    <div>
      <h1>Country Stats</h1>
      <h1>{country}</h1>
      <span>
        <img
          src={flag}
          style={{ height: '40px', marginBottom: '30px' }}
          alt='country flag'
        />
      </span>
      <form>
        <FormControl>
          <FormLabel>Select Country</FormLabel>
          {renderInput()}
          <FormHelperText></FormHelperText>
        </FormControl>
      </form>
      {renderResults()}
    </div>
  )
}

export default CountryStats
