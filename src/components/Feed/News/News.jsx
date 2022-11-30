import React from "react";
import heartImage from "../../../images/heart.png"

import "../../../styles/Feed.scss";

const News = ({news}) => {
    return (
        <div className="news-item">
            <div className="news-maininfo">
                <div className="news-title">{news.title}</div>
                <div className="news-text">{news.text}</div>
            </div>
            <div className="news-reaction">
                <div>{news.likeCount}</div>
                <img height={"20px"} width={"20px"} src={heartImage} alt="" />
            </div>
        </div>
    )
};

export default News;