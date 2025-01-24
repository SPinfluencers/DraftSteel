import { Link } from 'react-router-dom'

const EngineeringServices = () => {
  return (
    <div className="engineering-services-page">
    <h1>Service we provide</h1>
    <div className="services-background">
      <div className="services-block-container-1">
        <Link to="/structural-steel" className="service-block">
          <h3>Structural Steel Detailing</h3>
        </Link>
        <Link to="/structural-steel" className="service-block">
          <h3>Engineering & Connection Design</h3>
        </Link>
        <Link to="/structural-steel" className="service-block">
          <h3>Miscellaneous Detailing</h3>
        </Link>
        <Link to="/structural-steel" className="service-block">
          <h3>Take-off Projects</h3>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default EngineeringServices