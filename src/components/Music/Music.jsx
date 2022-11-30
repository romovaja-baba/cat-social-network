import React from "react";
import playButtonImage from "../../images/play-button.png"

import "../../styles/Music.scss"

const Music = () => {
    return (
        <div className="music-area">
            <div className="music-list">
                <div className="music-item">
                    <img src={playButtonImage} alt="" width={"16px"} height={"16px"} />
                    <div className="music-title">song 1</div>
                </div>
            </div>
        </div>
    )
};

export default Music;