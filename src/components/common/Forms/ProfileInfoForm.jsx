import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveProfileInfo } from "../../../redux/profile-reducer";

const ProfileInfoForm = ({ disableEditMode }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log("form", data)
        dispatch(saveProfileInfo(data));
        disableEditMode();
    }

    return (
        <form className="profile-editmode-area" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("fullName")} placeholder="Name" className="profile-editmode-input" />
            <input {...register("aboutMe")} placeholder="About Me" className="profile-editmode-input" />
            <div className="profile-editmode-job">
                <span>Looking for a job?</span>
                <input type="checkbox" {...register("lookingForAJob")} placeholder="Looking for a job" />
            </div>
            <input {...register("lookingForAJobDescription")} placeholder="Description" className="profile-editmode-input" />

            <button>Save Edit</button>
        </form>
    )
};

export default ProfileInfoForm;