import React, { useEffect, useState } from "react";
import * as API from "../services/launches";
import LaunchItem from "./LaunchItem";
import '../styles/LaunchList.css'
import Button from './Button'

function LaunchList() {
  const [originalLaunches, setOriginalLaunches] = useState([])

  const [launches, setLaunches] = useState([])

  const [limit, setLimit] = useState(10)

  const filterFailures = () => {
    const failureLaunches = originalLaunches.filter(launch => launch.launch_success === false)
    setLaunches(failureLaunches)
    if(failureLaunches.length < limit) {
      setLimit(failureLaunches.length)
    }
  }
  
  const filterSuccess = () => {
    const successLaunches = originalLaunches.filter(launch => launch.launch_success === true)
    setLaunches(successLaunches)
  }
  
  const allLaunches = () => {
    setLaunches(originalLaunches)
  }

  useEffect(() => {
    API.getLaunches().then(data => {
      setOriginalLaunches(data)
      setLaunches(data)
    })
  },[])

  const showMore = () => {
    setLimit(limit + 10)
    if(limit + 10 >= launches.length) {
      setLimit(launches.length)
    }
  }

  const showLess = () => {
    setLimit(limit - 10)
    if(limit - 10 < 0) {
      setLimit(0)
    }
  }

  return (
    <>
      <div className="filter-container">
        <Button 
          type='all-button'
          handleClick={allLaunches}
        >
          All Launches
        </Button>

        <Button 
          type='failures-button'
          handleClick={filterFailures}
        >
          Failure Launches
        </Button>

        <Button 
          type='success-button'
          handleClick={filterSuccess}
        >
          Succesfull Launches
        </Button>
      </div>

      <div className="launch-list-container">
        {launches.length === 0 ? (
          <div>Loading...</div>
        ) : (
          launches.slice(0,limit).map(launch => (
            <LaunchItem key={launch.flight_number} {...launch}/>
          ))
        )}
      </div>

      <div className="buttons-container">
        <Button 
          type='more'
          handleClick={showMore}
        >
          Show More
        </Button>
        
        <Button 
          type='less'
        handleClick={showLess}
        >
          Show Less
        </Button>
      </div>

      <p className="showed-launches"><em><strong>*</strong>Showing {limit} of {launches.length} launches</em></p>
    </>
  );
}

export default LaunchList