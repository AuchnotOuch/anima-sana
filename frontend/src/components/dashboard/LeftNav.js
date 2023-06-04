import React from 'react'
import './Dashboard.css'

const LeftNav = () => {
    return (
        <div className='left-nav'>
            <div className='home-button-container'>
                <button className='home-button'>Home</button>
            </div>
            <div className='health-button-container'>
                <button className='health-button'>Health</button>
            </div>
            <div className='journal-button-container'>
                <button className='journal-button'>Journal</button>
            </div>
        </div>
    )
}

export default LeftNav;
