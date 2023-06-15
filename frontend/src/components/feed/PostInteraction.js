import React from "react";
import "./Feed.css"

const PostInteraction = () => {

    return (
        <div className="post-interaction-container">
            <button className="pulse-button"><i className="fa-solid fa-wave-square fa-beat-fade"></i></button>
            <button className="comment-button"><i className="fa-regular fa-comment"></i></button>
            <button className="share-button"><i className="fa-solid fa-share"></i></button>
        </div>
    )
}

export default PostInteraction
