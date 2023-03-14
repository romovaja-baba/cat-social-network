import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import SocialsForm from "./SocialsForm";
import { saveProfileInfo } from "../../../redux/actions/profile-actions";
import "../../../styles/Profile.scss";

const ProfileInfoForm = ({ disableEditMode, profile }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        dispatch(saveProfileInfo(data));
        disableEditMode();
    };

    const [name, setName] = useState(profile.fullName);
    const [aboutMe, setAboutMe] = useState(profile.aboutMe);
    const [description, setDescription] = useState(profile.lookingForAJobDescription);

    return (
        <form className="profile-editmode-area" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="fullName">Name:</label>
                <input
                    {...register("fullName")}
                    value={name}
                    onChange={e => setName(e.currentTarget.value)}
                    placeholder="Name"
                    className="profile-editmode-input" />
            </div>
            <div>
                <label htmlFor="aboutMe">About Yourself:</label>
                <input
                    {...register("aboutMe")}
                    value={aboutMe}
                    onChange={e => setAboutMe(e.currentTarget.value)}
                    placeholder="About Me"
                    className="profile-editmode-input" />

            </div>
            <div className="profile-editmode-job">
                <label htmlFor="lookingForAJob">Looking for a job?</label>
                <input
                    type="checkbox" {...register("lookingForAJob")}
                    placeholder="Looking for a job"
                />
            </div>
            <div>
                <label htmlFor="lookingForAJobDescription">Your Job Description:</label>
                <input
                    {...register("lookingForAJobDescription")}
                    value={description}
                    onChange={e => setDescription(e.currentTarget.value)}
                    placeholder="Description"
                    className="profile-editmode-input" />
            </div>
            {Object.entries(profile.contacts).map(contact => {
                return (
                    <SocialsForm socialName={contact[0]} socialLink={contact[1]}
                        register={register} key={contact} />
                )
            })}
            <button>Save Edit</button>
        </form>
    )
};

export default ProfileInfoForm;