import './StatsCard.css'

const StatsCard = ({ number, label, icon }) => {
  return (
    <div className="stats-card">
      {icon && <div className="stats-icon">{icon}</div>}
      <div className="stats-number">{number}</div>
      <div className="stats-label">{label}</div>
    </div>
  )
}

export default StatsCard

