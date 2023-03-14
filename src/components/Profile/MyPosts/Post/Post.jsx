import { useDispatch } from "react-redux";
import heartImage from "../../../../images/heart.png";
import { deletePost } from "../../../../redux/actions/profile-actions";
import defaultPP from "../../../../images/defaultPP.jpg";

import "../../../../styles/Posts.scss";

const Post = ({ post, profilePicture }) => {

    const dispatch = useDispatch();

    return (
        <div className="post-item">
            <div className="post-item-body">
                <div className="post-item-user">
                    <img className="post-item-profilepicture" alt="" 
                    src={profilePicture || defaultPP} />
                </div>
                <div className="post-item-text">{post.text}</div>
            </div>
            <div className="post-item-reaction">
                {post.likeCount}
                <img height={"20px"} src={heartImage} alt="" />
                <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
            </div>
        </div>
    );
};

export default Post;