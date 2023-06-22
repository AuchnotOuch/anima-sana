import React, { useState } from 'react'
import './Dashboard.css'

const LeftNav = () => {
    const [toggleHome, setToggleHome] = useState(false)

    return (
        <div className='left-nav'>
            <div className='home-button-container'>
                <button className='home-button'><i className="fa-solid fa-house"></i></button>
            </div>
            <div className='health-button-container'>
                <button className='health-button'><i className="fa-solid fa-heart-pulse"></i></button>
            </div>
            <div className='journal-button-container'>
                <button className='journal-button'><i className="fa-solid fa-pen-nib"></i></button>
            </div>
        </div>
    )
}

export default LeftNav;
