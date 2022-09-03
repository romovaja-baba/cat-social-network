import React from "react";
import styles from "./Feed.module.css";

import News from "./News/News";


const Feed = ({state}) => {
    let newsElements = state.feedPage.newsData.map(news => <News key={news.id} news={news}/>);
    return (
        <div className={styles.feedArea}>
            <div className={styles.itemsArea}>
                {newsElements}
            </div>
        </div>
    )
};

export default Feed;