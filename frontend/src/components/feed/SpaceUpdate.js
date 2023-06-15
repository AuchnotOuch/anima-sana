import React from "react";
import "./Feed.css"

const SpaceUpdate = () => {
    //TODO: Revise to accomodate for an actual backend with data. Just doing a basic blueprint.
    return (
        <div className='sample-space-update'>
            <div className="space-update-photo"><i className="fa-solid fa-hand-holding-hand"></i></div>
            <div>
                <div className='space-update-banner'>
                    <div className='space-update-banner-text'>Janean made a post in Trauma Support Group</div>
                </div>
                <div className="space-update-preview">I made it past a major milestone today!
                    I worked up the courage...  <i className="fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
    )
}

export default SpaceUpdate;
