import NavDiv from "../../common/NavDiv";

import "../../../styles/Dialogs.scss";

const DialogUser = ({profilePicture, name, id}) => {
    return (
        <div className="dialog-user-area">
            <img src={profilePicture} alt={name} />
            <NavDiv to={`/dialogs/${id}`} name={name}/>
        </div>
    )
};

export default DialogUser;