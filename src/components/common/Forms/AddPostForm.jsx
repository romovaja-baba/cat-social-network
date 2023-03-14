import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/actions/profile-actions";
import addImage from "../../../images/add.svg";

import "../../../styles/Profile.scss";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        dispatch(addPost(data.newPostText));
        reset();
    }

    return (
        <>
            <form className="posts-newpost" onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("newPostText",
                    {
                        required: "Post cannot be empty",
                        maxLength: { value: 10, message: "The post should be under 10 characters" }
                    }
                )}
                    placeholder="What's on your meownd?"
                    className={errors.newPostText ? "red-border" : ""} />
                <button><img src={addImage} alt="" className="posts-addbutton" type="button" /></button>
            </form>
            {errors.newPostText && 
            <div className="post-input-error">
                {errors.newPostText.message}
            </div>}
        </>
    )
};

export default AddPostForm;