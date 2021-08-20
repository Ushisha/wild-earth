const LocationInfoBox = ({ info, closeInfo }) => {
  return (
    <div className="location-info">
      <div className="info-container">
        <h2>Natural Event Info</h2>
        <ul>
          <li className="info-id">
            ID:
            <strong className="info-id">{info.id}</strong>
          </li>
          <li>
            <strong>{info.title}</strong>
          </li>
        </ul>
        <button className="close-btn" onClick={closeInfo}>
          &times;
        </button>
      </div>
    </div>
  )
}

export default LocationInfoBox
