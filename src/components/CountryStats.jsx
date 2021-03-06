import React, { useState, useEffect } from 'react'
import Stats from './Stats'
import Skeleton from '@material-ui/lab/Skeleton'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import { getCountriesWithAlpha2Code } from '../apis/coutries'

const CountryStats = () => {
  const [fetching, setFetching] = useState(false)
  const [country, setCountry] = useState('PK')
  const [data, setData] = useState(undefined)
  const [countriesWithCode, setCountriesCode] = useState([['Pakistan', 'PK']])

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
      setFetching(false)
    }
    getData(country)
  }, [country])

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
      return <Stats data={data} />
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