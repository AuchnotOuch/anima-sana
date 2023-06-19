import React from 'react'
import SpaceUpdate from '../feed/SpaceUpdate'
import HealthUpdates from '../feed/HealthUpdate'
import JournalUpdate from '../feed/JournalUpdates'
import PostUpdate from '../feed/PostUpdate'
import './Dashboard.css'
import MoodBoard from './mood_board/MoodBoard'

const Hub = () => {
    return (
        <div className='hub'>
            <div className='hub-left'>
                <SpaceUpdate />
                <HealthUpdates />
                <JournalUpdate />
                <PostUpdate />
            </div>
            <div className='hub-right'>
                <MoodBoard />
            </div>
        </div>
    )
}

export default Hub
