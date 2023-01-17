import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatus, updateStatus } from "../../../redux/profile-reducer";
import "../../../styles/Profile.scss";

const ProfileStatus = ({isOwner}) => {

    const statusText = useSelector(state => state.profilePage.status);
    const id = useSelector(state => state.profilePage.profile.userId)
    const dispatch = useDispatch();
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(statusText);

    useEffect(() => {
        dispatch(getStatus(id));
    }, [dispatch, id, statusText]);

    const statusOnClick = () => {
        if (isOwner) {
            setEditMode(true);
        }
    }

    const statusOnBlur = () => {
        dispatch(updateStatus(status));
        setEditMode(false);
    };

    return (
        <div className="profile-status-area">
            {editMode ?
                <input
                    placeholder="express your feelings"
                    onBlur={() => statusOnBlur()}
                    onChange={(e) => setStatus(e.currentTarget.value)}
                    autoFocus
                /> :
                <div className="profile-status-text" onClick={() => statusOnClick()}>
                    {statusText || "no status"}
                </div>
            }
        </div>
    )
}

export default ProfileStatus;