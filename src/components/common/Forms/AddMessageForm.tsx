import { useForm } from "react-hook-form";
import addImage from "../../../images/add.svg";
import { IUserConvo } from "../../../interfaces/dialogs.interface";
import { sendMessage } from "../../../redux/actions/dialogs-actions";
import "../../../styles/Dialogs.scss";
import { useAppDispatch } from "../../../utils/hooks";

interface Props {
    userConvo: IUserConvo
}

const AddMessageForm: React.FC<Props> = ({ userConvo }: Props) => {

    interface MessageInputValues {
        newMessageText: string
    }

    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<MessageInputValues>();
    const onSubmit = (data: MessageInputValues): void => {
        dispatch(sendMessage(userConvo.userId, data.newMessageText));
        reset();
    }
    return (
        <>
            <form className="convo-input" onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    {...register("newMessageText", { required: "Message cannot be empty" })}
                    placeholder="Enter your message here..."
                    className={errors.newMessageText ? "red-border" : ""}
                />
                <button><img src={addImage} alt="" height={"40px"} className="convo-addbutton" /></button>
            </form>
            {errors.newMessageText && <div className="message-input-error">{errors.newMessageText.message}</div>}
        </>
    )
};

export default AddMessageForm;