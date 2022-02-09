import { useState } from 'react';
import type { NextPage } from 'next';
import { Map } from 'react-map-gl';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 600,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <div className={styles.container}>
      <Map
        {...viewport}
        // mapStyle="mapbox://styles/mapbox/dark-v9" // WORKS
        // DOES NOT WORKS if swcMinify is `true` on major version
        // WORKS on 12.0.11-canary.9
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken="pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg"
        onMove={(event: any) => setViewport(event.viewState)}
      />
    </div>
  )
}

export default Home
