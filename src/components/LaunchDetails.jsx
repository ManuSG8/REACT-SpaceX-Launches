import React, { useEffect, useState } from "react";
import * as API from '../services/launches'
import { useParams, Link } from 'react-router-dom'
import '../styles/LaunchDetails.css'
import spacexLogo from '../assets/spacex.png'

function LaunchDetails() {

  const [launch, setLaunch] = useState({})

  // useParams sirve para acceder a los parametros de una URL
  const { launchId } = useParams()

  useEffect(() => {
    API.getLaunchesById(launchId).then(setLaunch)
  },[launchId])

  return(
    <div className="details-container">
      {
        !launch ? (
          <div>Loading...</div>
        ) : (
          <>
            <img src={spacexLogo} width='200' alt='' />
            <h2>{launch.mission_name}</h2>
              <p>Rocket Name: 
                <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
                  <button className="rocket-see-more"><strong>{launch.rocket?.rocket_name}</strong></button>
                </Link>
              </p>
            <p>Local Launch Date: <strong>{launch.launch_date_local}</strong></p>
            <p>Details: <strong>{launch.details ? launch.details : 'Not specified'}</strong></p>
            {launch.launch_failure_details?.reason ? (
              <p>Failure: <strong>{launch.launch_failure_details?.reason}</strong></p>
            ) : (
              ''
              )}
          </>
        )
      }
      <Link to='/'>
        <button className="back">Back</button>
      </Link>
    </div>
  )
}

export default LaunchDetails