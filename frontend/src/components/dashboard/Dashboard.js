import React, { useContext } from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'
import Hub from './Hub'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='container'>
            <LeftNav />
            <Hub />
            <RightNav />
        </div>
    )
}

export default Dashboard;
