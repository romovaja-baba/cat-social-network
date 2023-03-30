import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IProfile } from "../../../interfaces/profile.interface";
import { saveProfileInfo } from "../../../redux/actions/profile-actions";
import "../../../styles/Profile.scss";
import { useAppDispatch } from "../../../utils/hooks";
import SocialsForm from "./SocialsForm";

interface Props {
    disableEditMode: () => void,
    profile: IProfile
}

const ProfileInfoForm = ({ disableEditMode, profile }: Props) => {

    const dispatch = useAppDispatch();
    const methods = useForm<IProfile>();
    const { register, handleSubmit } = methods;
    const onSubmit = (data: IProfile) => {
        dispatch(saveProfileInfo(data));
        disableEditMode();
    };

    const [name, setName] = useState(profile.fullName);
    const [aboutMe, setAboutMe] = useState(profile.aboutMe);
    const [description, setDescription] = useState(profile.lookingForAJobDescription);

    return (
        <FormProvider {...methods}>
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
                {Object.entries(profile.contacts).map((contact, index) => {
                    return (
                        <SocialsForm socialName={contact[0]} socialLink={contact[1]} key={index} />
                    )
                })}
                <button>Save Edit</button>
            </form>
        </FormProvider>
    )
};

export default ProfileInfoForm;