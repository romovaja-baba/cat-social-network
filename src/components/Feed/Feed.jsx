import React from "react";
import News from "./News/News";
import { useSelector } from "react-redux";

import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { newsSelector } from "../../utils/selectors";

import "../../styles/Feed.scss";

const Feed = () => {

    const news = useSelector(newsSelector);

    return (
        <div className="feed-area">
            <div className="feed-list">
                {news.map(news => <News key={news.id} news={news} />)}
            </div>
        </div>
    )
};

export default withAuthRedirect(Feed);