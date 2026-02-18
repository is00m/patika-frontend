import { useNavigate } from 'react-router-dom'
import { getIdFromUrl } from '../api/swapi'

function StarshipCard({ starship }) {
  const navigate = useNavigate()
  const id = getIdFromUrl(starship.url)

  return (
    <div className="starship-card" onClick={() => navigate(`/starship/${id}`)}>
      <p className="card-name">{starship.name}</p>
      <div className="card-meta">
        <span><strong>Model:</strong> {starship.model}</span>
        <span><strong>Max Speed:</strong> {starship.max_atmosphering_speed}</span>
        <span><strong>Class:</strong> {starship.starship_class}</span>
      </div>
    </div>
  )
}

export default StarshipCard
