import React from 'react'
import './Dashboard.css'

const RightNav = () => {
    return (
        <div className='right-nav'>
            <div className='spaces-button-container'>
                <button className='spaces-button'><i className="fa-solid fa-hand-holding-hand"></i></button>
            </div>
            <div className='post-button-container'>
                <button className='post-button'><i className="fa-solid fa-plus"></i></button>
            </div>
            <div className='settings-button-container'>
                <button className='settings-button'><i className="fa-solid fa-gear"></i></button>
            </div>
        </div>
    )
}

export default RightNav
