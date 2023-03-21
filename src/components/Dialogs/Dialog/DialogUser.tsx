import NavDiv from "../../common/NavDiv";
import "../../../styles/Dialogs.scss";

interface Props {
    profilePicture: string,
    name: string,
    id: number
}

const DialogUser = ({ profilePicture, name, id }: Props) => {
    return (
        <div className="dialog-user-area">
            <img src={profilePicture} alt={name} />
            <NavDiv to={`/dialogs/${id}`} name={name} />
        </div>
    )
};

export default DialogUser;