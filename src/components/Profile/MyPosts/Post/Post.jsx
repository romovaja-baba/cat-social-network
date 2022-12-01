import React from "react";
import heartImage from "../../../../images/heart.png";

import "../../../../styles/Profile.scss";

const Post = ({ post }) => {

    return (
        <div className="post-item">
            <div className="post-item-body">
                <div className="post-item-user">
                    <img className="post-item-profilepicture" alt="" src="https://us.123rf.com/450wm/nengloveyou/nengloveyou1404/nengloveyou140400107/27500065-portrait-thai-yellow-cat-brown-eyed-expressive-look-isolated-on-white.jpg?ver=6" />
                </div>
                <div className="post-item-text">{post.text}</div>
            </div>
            <div className="post-item-reaction">
                {post.likeCount}
                <img height={"20px"} src={heartImage} alt="" />
            </div>
        </div>
    );
};

export default Post;