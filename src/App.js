import Map from './components/Map'
import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Header from './components/Header'
function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch(process.env.REACT_APP_NASA_API_URL)
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])
  return (
    <>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </>
  )
}

export default App
