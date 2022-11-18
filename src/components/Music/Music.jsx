import React from "react";
import styles from "./Music.module.css";

import playButtonImage from "../../images/play-button.png"

const Music = () => {
    return (
        <div className={styles.area}>

            <div className={styles.song}>
                <img src={playButtonImage} alt="" width={"16px"} height={"16px"}/>
                <div className={styles.songName}>song 1</div>
            </div>

            <div className={styles.song}>
                <img src={playButtonImage} alt="" width={"16px"} height={"16px"}/>
                <div className={styles.songName}>song 2</div>
            </div>

            <div className={styles.song}>
                <img src={playButtonImage} alt="" width={"16px"} height={"16px"}/>
                <div className={styles.songName}>song 3</div>
            </div>
        </div>
    )
};

export default Music;