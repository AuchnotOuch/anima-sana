import React from "react";
import "./Feed.css"


const HealthUpdates = () => {
    //TODO: Revise to accomodate for an actual backend with data. Just doing a basic blueprint.
    return (
        <div className="sample-health-update">
            <div className="health-update-banner">
                <div className="health-update-photo"><i className="fa-solid fa-heart-pulse"></i></div>
                <div className='health-update-banner-text'>You're mood has been in an upward climb! See the details.</div>
            </div>
        </div>
    )
}

export default HealthUpdates
