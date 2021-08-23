import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMaker from './LocationMaker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map((ev) => {
    if (
      ev.categories[0].id === 8 ||
      ev.categories[0].id === 10 ||
      ev.categories[0].id === 12
    ) {
      return (
        <LocationMaker
          key={ev.id}
          categories={ev.categories[0].id}
          lat={
            ev.geometries[0].coordinates.length === 2
              ? ev.geometries[0].coordinates[1]
              : ev.geometries[0].coordinates[0][0][1]
          }
          lng={
            ev.geometries[0].coordinates.length === 2
              ? ev.geometries[0].coordinates[0]
              : ev.geometries[0].coordinates[0][0][0]
          }
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              date: ev.geometries[0].date,
            })
          }
        />
      )
    }
    return null
  })

  const closeInfo = () => {
    setLocationInfo(null)
  }

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && (
        <LocationInfoBox info={locationInfo} closeInfo={closeInfo} />
      )}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 25.8305,
    lng: -80.180374,
  },
  zoom: 4,
}
export default Map
