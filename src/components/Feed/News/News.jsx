import React from "react";
import styles from "./News.module.css";

const News = ({news}) => {
    return (
        <div className={styles.item}>
            <div className={styles.text}>
                <div><h2>{news.title}</h2></div>
                <div>{news.text}</div>
            </div>
            <div className={styles.reaction}>
                <div>{news.likeCount}</div>
                <img height={"20px"} width={"20px"} src="./heart.png" alt="" />
            </div>
        </div>
    )
};

export default News;