import React, { useState, useEffect } from 'react'
import * as API from '../services/launches'
import { useParams } from 'react-router-dom'
import '../styles/RocketDetails.css'
import Button from './Button'

function RocketDetails() {

  const [rocket, setRocket] = useState({})

  const { rocketId } = useParams()

  useEffect(() => {
    API.getRocketsById(rocketId).then(setRocket)
  },[rocketId])

  return(
    <div className='rocket-details-container'>
      {
        !rocket ? (
          <div>Loading...</div>
        ) : (
          <>
            <h2 className='rocket-name'>{rocket.rocket_name}</h2>
            <div className='info-container'>
              <div className='basic-info'>
                <p><strong className={rocket.active ? 'active' : 'inactive'}>{rocket.active ? 'Active' : 'Inactive'}</strong></p>
                <p>Country: <strong>{rocket.country}</strong></p>
                <p>First Flight: <strong>{rocket.first_flight}</strong></p>
              </div>
              <div className='technical-specs-container'>
                <h3 className='technical-specs-title'>Technical Specifications</h3>
                <p>Height (m): <strong>{rocket.height?.meters}</strong></p>
                <p>Diameter (m): <strong>{rocket.diameter?.meters}</strong></p>
                <p>Mass (kg): <strong>{rocket.mass?.kg}</strong></p>
                <p>Engines: <strong>{rocket.engines?.number} ({rocket.engines?.type} type)</strong></p>
              </div>
            </div>
            <img className='rocket' src={`${rocket.flickr_images}`} alt='' />
            <p className='description'>Description: <strong>{rocket.description}</strong></p>
          </>
        )
      }
      <Button type='back' handleClick={() => window.history.back()}>Back</Button>
    </div>
  )
}

export default RocketDetails