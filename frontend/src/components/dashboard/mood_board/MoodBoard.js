import React, { useState } from "react";
import "./MoodBoard.css"

const MoodBoard = () => {
    const [boardTitle, setBoardTitle] = useState('')

    return (
        <div className="mood-board">
            <div className="board-title">
                <h2>
                    <form>
                        <input
                            type="text"
                            value={boardTitle}
                            onChange={e => setBoardTitle(e.target.value)}
                            id="board-title-input"
                        >
                        </input>
                    </form>
                </h2>
            </div>
            <div className="board-canvas"></div>
        </div>
    )
}

export default MoodBoard;
