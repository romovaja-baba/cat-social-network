import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../../redux/actions/dialogs-actions";

import addImage from "../../../images/add.svg";

import "../../../styles/Dialogs.scss";

const AddMessageForm = ({ userConvo }) => {

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        dispatch(sendMessage(userConvo.userId, data.newMessageText));
        reset();
    }

    return (
        <>
            <form className="convo-input" onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    {...register("newMessageText", { required: "Message cannot be empty"})}
                    placeholder="Enter your message here..."
                    className={errors.newMessageText ? "red-border" : ""}
                />
                <button><img src={addImage} alt="" height={"40px"} type="button" className="convo-addbutton" /></button>
            </form>
            {errors.newMessageText && <div className="message-input-error">{errors.newMessageText.message}</div>}
        </>
    )
};

export default AddMessageForm;