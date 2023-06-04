import React from 'react'
import './Dashboard.css'

const RightNav = () => {
    return (
        <div className='right-nav'>
            <div className='spaces-button-container'>
                <button className='spaces-button'>Spaces</button>
            </div>
            <div className='friends-button-container'>
                <button className='friends-button'>Friends</button>
            </div>
            <div className='settings-button-container'>
                <button className='settings-button'>Settings</button>
            </div>
        </div>
    )
}

export default RightNav
