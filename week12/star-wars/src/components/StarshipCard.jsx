import { useNavigate } from 'react-router-dom'
import { getIdFromUrl } from '../api/swapi'

function StarshipCard({ starship }) {
  const navigate = useNavigate()
  const id = getIdFromUrl(starship.url)

  return (
    <div className="starship-card" onClick={() => navigate(`/starship/${id}`)}>
      <div className="card-content">
        <p className="card-name">{starship.name}</p>
        <div className="card-divider" />
        <div className="card-meta">
          <span><strong>Model</strong> {starship.model}</span>
          <span><strong>Speed</strong> {starship.max_atmosphering_speed}</span>
          <span><strong>Class</strong> {starship.starship_class}</span>
        </div>
      </div>
    </div>
  )
}

export default StarshipCard
