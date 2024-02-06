const BASE_API_URL = process.env.ACCUWEATHER_BASE_API_URL;
const ACCUWEATHER_API_KEY = process.env.ACCUWEATHER_API_KEY;
const ACCUWEATHER_API_VERSION = process.env.ACCUWEATHER_API_VERSION;

export async function fetchAPI(url: string) {
  const res = await fetch(url);
  return res.json();
}

export async function getLocationData(location: string) {
  const url = `${BASE_API_URL}/locations/${ACCUWEATHER_API_VERSION}/cities/search?apikey=${ACCUWEATHER_API_KEY}&q=${location}&language=en-us`;
  return fetchAPI(url);
}

export async function getWeatherForecastData(locationKey: string) {
  const url = `${BASE_API_URL}/forecasts/${ACCUWEATHER_API_VERSION}/daily/5day/${locationKey}?apikey=${ACCUWEATHER_API_KEY}&language=en-us&details=true&metric=true`;
  return fetchAPI(url);
}

export async function getTopCities(limit: 50 | 100 | 150 = 50) {
  const url = `${BASE_API_URL}/locations/${ACCUWEATHER_API_VERSION}/topcities/${limit}?apikey=${ACCUWEATHER_API_KEY}`;
  return fetchAPI(url);
}
