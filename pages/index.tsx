import { useState } from 'react';
import type { NextPage } from 'next';
import ReactMapGL from 'react-map-gl';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [viewport] = useState({
    width: 800,
    height: 600,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <div className={styles.container}>
      <ReactMapGL
        {...viewport}
        // mapStyle="mapbox://styles/mapbox/dark-v9" // WORKS
        mapStyle="mapbox://styles/mapbox/dark-v10" // DOES NOT WORKS if swcMinify is `true`
        mapboxApiAccessToken="pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg"
      />
    </div>
  )
}

export default Home
