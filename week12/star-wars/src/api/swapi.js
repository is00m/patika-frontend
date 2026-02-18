const BASE_URL = 'https://swapi.dev/api'

export async function getStarships(page = 1) {
  const res = await fetch(`${BASE_URL}/starships/?page=${page}`)
  if (!res.ok) throw new Error('Failed to fetch starships')
  return res.json()
}

export async function searchStarships(query) {
  const res = await fetch(`${BASE_URL}/starships/?search=${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error('Failed to search starships')
  return res.json()
}

export async function getStarshipById(id) {
  const res = await fetch(`${BASE_URL}/starships/${id}/`)
  if (!res.ok) throw new Error('Failed to fetch starship')
  return res.json()
}

export async function fetchUrl(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export function getIdFromUrl(url) {
  const parts = url.replace(/\/$/, '').split('/')
  return parts[parts.length - 1]
}
