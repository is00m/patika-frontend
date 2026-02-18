import { useState, useEffect } from 'react'
import { getStarships } from '../api/swapi'
import StarshipCard from '../components/StarshipCard'

function HomePage() {
  const [starships, setStarships] = useState([])
  const [nextPage, setNextPage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    getStarships(1)
      .then((data) => {
        setStarships(data.results)
        setNextPage(data.next)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const handleLoadMore = () => {
    if (!nextPage) return
    const page = new URL(nextPage).searchParams.get('page')
    setLoadingMore(true)
    getStarships(page)
      .then((data) => {
        setStarships((prev) => [...prev, ...data.results])
        setNextPage(data.next)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoadingMore(false))
  }

  return (
    <div className="page">
      <header className="site-header">
        <h1>Star Wars</h1>
        <p>Starship Database</p>
      </header>

      {loading && <p className="status-message">Loading starships...</p>}
      {error && <p className="status-message error">{error}</p>}

      {!loading && !error && (
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
