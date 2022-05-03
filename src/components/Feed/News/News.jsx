import React from "react";
import styles from "./News.module.css";

const News = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.text}>
                <div><h2>{props.news.title}</h2></div>
                <div>{props.news.text}</div>
            </div>
            <div className={styles.reaction}>
                <span><img height={"20px"} src="./heart.png" alt="" /></span>
                <span>{props.news.likeCount}</span>
            </div>
        </div>
    )
};

export default News;