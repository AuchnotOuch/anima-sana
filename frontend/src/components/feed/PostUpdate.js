import React from "react";
import PostInteraction from "./PostInteraction";
import "./Feed.css"

const PostUpdate = () => {

    return (
        <div className="sample-post-update">
            <div className="post-update-photo"><img src="https://images.squarespace-cdn.com/content/v1/5e6ece70bd2f8a6de8472818/714f685e-d0ba-40f9-8bb2-38722c1fd29c/Tiny+Avatar.png?format=1000w" alt="post-owner"></img></div>
            <div>
                <div className='post-update-banner'>
                    <div className='post-update-banner-text'>Ryan Sinclair:</div>
                </div>
                <div className="post-update-preview">Would any of my friends be interested in a virtual movie night? Netflix dropped the entire Hunger Games Franchise! 🤩 </div>
                <PostInteraction />
            </div>
        </div>
    )
}

export default PostUpdate
