import { useEffect } from "react";
import { useState } from "react";
import { getStatus, updateStatus } from "../../../redux/actions/profile-actions";
import "../../../styles/Profile.scss";
import { useAppDispatch } from "../../../utils/hooks";

interface Props {
    isOwner: boolean,
    statusText: string,
    id: number
}

const ProfileStatus: React.FC<Props> = ({ isOwner, statusText, id }: Props) => {

    const dispatch = useAppDispatch();
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(statusText);

    useEffect(() => {
        dispatch(getStatus(id));
    }, [dispatch, id, statusText]);

    const statusOnClick = () => {
        if (isOwner) setEditMode(true);
    }

    const statusOnBlur = () => {
        dispatch(updateStatus(status));
        setEditMode(false);
    };

    return (
        <div className="profile-status-area">
            {editMode ?
                <input
                    value={status}
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