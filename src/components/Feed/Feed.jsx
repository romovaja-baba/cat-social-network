import React from "react";
import News from "./News/News";
import { useSelector } from "react-redux";

import "../../styles/Feed.scss";

const Feed = () => {

    const news = useSelector(state => state.feedPage.newsData);
    let newsElements = news.map(news => <News key={news.id} news={news} />);
    return (
        <div className="feed-area">
            <div className="feed-list">
                {newsElements}
            </div>
        </div>
    )
};

export default Feed;