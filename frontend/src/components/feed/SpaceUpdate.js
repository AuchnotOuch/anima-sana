import React, { useEffect, useState } from "react";
import "./Feed.css"

const SpaceUpdate = () => {
    //TODO: Revise to accomodate for an actual backend with data. Just doing a basic blueprint.
    const sampleText = "I made it past a major milestone today! I worked up the courage to walk through the grocery store today during it's busiest hour!"
    const [showFullText, setShowFullText] = useState(false)
    const [previewText, setPreviewText] = useState(sampleText)

    useEffect(() => {
        const preview = document.getElementsByClassName('space-update-preview')
        setPreviewText(preview[0].innerText.substr(0, 46))
        console.log(preview[0].innerText)
        console.log(previewText)
        // setPreviewText(preview.value)
    })


    return (
        <div className='sample-space-update'>
            <div className="space-update-photo"><i className="fa-solid fa-hand-holding-hand"></i></div>
            <div>
                <div className='space-update-banner'>
                    <div className='space-update-banner-text'>Janean made a post in Trauma Support Group</div>
                </div>
                <div className="space-update-preview">{showFullText ? sampleText : previewText + "..."} <button onClick={() => setShowFullText(!showFullText)}><i className="fa-solid fa-arrow-right"></i></button></div>
            </div>
        </div >
    )
}

export default SpaceUpdate;
