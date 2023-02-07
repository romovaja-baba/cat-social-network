import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import DialogUser from "./Dialog/DialogUser";
import Convos from "./Convos/Convos";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { convosSelector, dialogUserSelector } from "../../utils/selectors";

import "../../styles/Dialogs.scss";

const Dialogs = () => {
    const { id } = useParams();

    const convosData = useSelector(convosSelector);
    const dialogUserData = useSelector(dialogUserSelector);

    let userConvo = convosData.find(convo => convo.userId === parseInt(id));

    return (
        <div className="dialogs-area">
            <div className="dialogs-users-list">
                {dialogUserData.map(dialog =>
                    <DialogUser name={dialog.name} id={dialog.id}
                        key={dialog.id} profilePicture={dialog.profilePicture} />)}
            </div>
            <div className="dialogs-messages-area">
                {userConvo && (<Convos userConvo={userConvo} />)}
            </div>
        </div>
    )
};

export default withAuthRedirect(Dialogs);