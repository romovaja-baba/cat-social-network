import { IUserConvo } from "../../../interfaces/dialogs.interface";
import "../../../styles/Dialogs.scss";
import AddMessageForm from "../../common/Forms/AddMessageForm";
import Message from "../Message/Message";

interface Props {
    userConvo: IUserConvo
}

const Convos = ({ userConvo }: Props) => {

    const messagesElements = userConvo.messages.map((message, index) => {
        return (<Message text={message.text} senderId={message.senderId} key={index} />)
    })

    return (
        <div className="convo-area">
            <div className="convo-messages-area">{messagesElements}</div>
            <AddMessageForm userConvo={userConvo} />
        </div>
    )
};

export default Convos;
