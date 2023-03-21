import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import "../../styles/Dialogs.scss";
import { useAppSelector } from "../../utils/hooks";
import { convosSelector, dialogUserSelector } from "../../utils/selectors";
import Convos from "./Convos/Convos";
import DialogUser from "./Dialog/DialogUser";

const Dialogs = () => {
    const { id } = useParams() as { id: string };
    const convosData = useAppSelector(convosSelector);
    const dialogUserData = useAppSelector(dialogUserSelector);

    let userConvo = convosData.find(convo => convo.userId === parseInt(id));

    return (
        <div className="dialogs-area">
            <div className="dialogs-users-list">
                {dialogUserData.map((dialog, index) =>
                    <DialogUser name={dialog.name} id={dialog.id}
                        key={index} profilePicture={dialog.profilePicture} />)}
            </div>
            <div className="dialogs-messages-area">
                {userConvo && (<Convos userConvo={userConvo} />)}
            </div>
        </div>
    )
};

export default withAuthRedirect(Dialogs);