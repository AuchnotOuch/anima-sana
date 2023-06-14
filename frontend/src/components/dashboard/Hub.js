import React from 'react'
import SpaceUpdate from '../feed/SpaceUpdate'
import './Dashboard.css'
import HealthUpdates from '../feed/HealthUpdate'

const Hub = () => {
    return (
        <div className='hub'>
            <SpaceUpdate />
            <HealthUpdates />
        </div>
    )
}

export default Hub
