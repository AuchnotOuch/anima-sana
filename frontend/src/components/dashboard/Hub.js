import React from 'react'
import SpaceUpdate from '../feed/SpaceUpdate'
import HealthUpdates from '../feed/HealthUpdate'
import JournalUpdate from '../feed/JournalUpdates'
import PostUpdate from '../feed/PostUpdate'
import './Dashboard.css'

const Hub = () => {
    return (
        <div className='hub'>
            <SpaceUpdate />
            <HealthUpdates />
            <JournalUpdate />
            <PostUpdate />
        </div>
    )
}

export default Hub
