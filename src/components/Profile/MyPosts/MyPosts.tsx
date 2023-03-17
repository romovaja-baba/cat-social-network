import React from "react";
import "../../../styles/Posts.scss";
import { useAppSelector } from "../../../utils/hooks";
import { postsSelector } from "../../../utils/selectors";
import AddPostForm from "../../common/Forms/AddPostForm";
import Post from "./Post/Post";

interface Props {
    profilePicture: string
}

const MyPosts = ({ profilePicture } : Props) => {
    const posts = useAppSelector(postsSelector);
    return (
        <div className="posts-area">
            <AddPostForm />
            <div className="posts-list">
                {posts.map((post, index) => <Post key={index} post={post} profilePicture={profilePicture} />).reverse()}
            </div>
        </div>
    )
};

export default React.memo(MyPosts);