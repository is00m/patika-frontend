import { useState, useEffect, useRef } from 'react'
import { getStarships, searchStarships, fetchUrl } from '../api/swapi'
import StarshipCard from '../components/StarshipCard'
import SearchBar from '../components/SearchBar'

function HomePage() {
  const [starships, setStarships] = useState([])
  const [nextPage, setNextPage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  const isFirstRender = useRef(true)

  const loadBrowse = () => {
    setLoading(true)
    setError(null)
    getStarships(1)
      .then((data) => {
        setStarships(data.results)
        setNextPage(data.next)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  const loadSearch = (q) => {
    setLoading(true)
    setError(null)
    searchStarships(q)
      .then((data) => {
        setStarships(data.results)
        setNextPage(data.next)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  // Initial load
  useEffect(() => {
    loadBrowse()
  }, [])

  // Debounced search — skips the first render
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const timer = setTimeout(() => {
      if (query.trim() === '') {
        loadBrowse()
      } else {
        loadSearch(query.trim())
      }
    }, 400)

    return () => clearTimeout(timer)
  }, [query])

  const handleLoadMore = () => {
    if (!nextPage) return
    setLoadingMore(true)
    fetchUrl(nextPage)
      .then((data) => {
        setStarships((prev) => [...prev, ...data.results])
        setNextPage(data.next)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoadingMore(false))
  }

  const isEmpty = !loading && !error && starships.length === 0

  return (
    <div className="page">
      <header className="site-header">
        <h1>Star Wars</h1>
        <p>Starship Database</p>
      </header>

      <SearchBar value={query} onChange={setQuery} />

      {loading && <p className="status-message">Loading starships...</p>}
      {error && <p className="status-message error">{error}</p>}
      {isEmpty && <p className="status-message">No starships found.</p>}

      {!loading && !error && !isEmpty && (
        <>
          <div className="starship-grid">
            {starships.map((ship) => (
              <StarshipCard key={ship.url} starship={ship} />
            ))}
          </div>

          {nextPage && (
            <div className="load-more-wrap">
              <button
                className="btn-load-more"
                onClick={handleLoadMore}
                disabled={loadingMore}
              >
                {loadingMore ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default HomePage
