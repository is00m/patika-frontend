import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getStarshipById } from '../api/swapi'

const FIELDS = [
  { key: 'manufacturer',           label: 'Manufacturer' },
  { key: 'starship_class',         label: 'Class' },
  { key: 'crew',                   label: 'Crew' },
  { key: 'passengers',             label: 'Passengers' },
  { key: 'max_atmosphering_speed', label: 'Max Atmosphering Speed' },
  { key: 'cargo_capacity',         label: 'Cargo Capacity' },
  { key: 'hyperdrive_rating',      label: 'Hyperdrive Rating' },
  { key: 'length',                 label: 'Length' },
]

function DetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [starship, setStarship] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getStarshipById(id)
      .then((data) => setStarship(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div className="detail-page">
      <button className="btn-back" onClick={() => navigate('/')}>
        ← Back
      </button>

      {loading && <p className="status-message">Loading starship...</p>}
      {error && <p className="status-message error">{error}</p>}

      {starship && (
        <>
          <h1 className="detail-title">{starship.name}</h1>
          <p className="detail-model">{starship.model}</p>

          <div className="detail-grid">
            {FIELDS.map(({ key, label }) => (
              <div className="detail-item" key={key}>
                <label>{label}</label>
                <p>{starship[key] || '—'}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default DetailPage
