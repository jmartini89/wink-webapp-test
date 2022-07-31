import { useLocation } from 'react-router-dom'

function DetailsPage() {
  const location = useLocation();

  return <div>{location.state}</div>
}

export default DetailsPage;