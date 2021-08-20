import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMaker = ({ categories, lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      {categories === 8 ? (
        <Icon icon={locationIcon} className="location-icon" />
      ) : categories === 10 ? (
        <Icon icon="whh:storm" className="location-icon" color="#186aaa" />
      ) : (
        <Icon icon="whh:mountains" className="location-icon" color="#a2304f" />
      )}
    </div>
  )
}

export default LocationMaker
