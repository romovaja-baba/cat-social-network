import React from "react";
import News from "./News/News";

import "../../styles/Feed.scss";

const Feed = ({news}) => {
    let newsElements = news.map(news => <News key={news.id} news={news}/>);
    return (
        <div className="feed-area">
            <div className="feed-list">
                {newsElements}
            </div>
        </div>
    )
};

export default Feed;