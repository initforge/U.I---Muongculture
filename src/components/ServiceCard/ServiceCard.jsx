import { Link } from 'react-router-dom'
import './ServiceCard.css'

const ServiceCard = ({ title, description, image, link, icon }) => {
  return (
    <Link to={link} className="service-card">
      <div className="service-image">
        <img src={image} alt={title} />
        {icon && (
          <div className="service-icon">
            {icon}
          </div>
        )}
      </div>
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        {description && <p className="service-description">{description}</p>}
      </div>
    </Link>
  )
}

export default ServiceCard

