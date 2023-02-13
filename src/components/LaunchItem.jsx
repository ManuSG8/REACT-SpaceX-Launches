import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/LaunchItem.css'

function LaunchItem(launch) {
  return(
    <div className='launch-item-container'>
      <h2>{launch.mission_name}</h2>
      <p>Rocket: <strong>{launch.rocket.rocket_name}</strong></p>
      <p>Year: <strong>{launch.launch_year}</strong></p>
      <p>Launch Success: <strong className={Boolean(launch.launch_success) ? 'success' : 'fail'}>{Boolean(launch.launch_success) ? 'Success' : 'Failure'}</strong></p>
      <Link to={`/launch/${launch.flight_number}`}>
        <button className='details'>
          See More
        </button>
      </Link>
    </div>
  )
}

export default LaunchItem