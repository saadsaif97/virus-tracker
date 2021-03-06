export async function getCountriesWithAlpha2Code() {
  try {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await response.json()
    const countries = await data.map((country) => [
      country.name,
      country.alpha2Code,
      country.flag,
    ])
    return countries
  } catch (e) {
    console.log(e)
  }
}
