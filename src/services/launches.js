const API_URL = 'https://api.spacexdata.com/v3'

export async function getLaunches() {
  const response = await fetch(`${API_URL}/launches`)
  const data = await response.json()
  return data
}

export async function getLaunchesById(flighNumber) {
  const response = await fetch(`${API_URL}/launches/${flighNumber}`)
  const data = await response.json()
  return data
}