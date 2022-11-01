import Convos from "./Convos";

import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state, ownProps) => {
    return {
        userConvo: ownProps.userConvo
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageTextActionCreator(body))
        },
        sendMessage: (userConvo) => {
            dispatch(sendMessageActionCreator(userConvo.userId))
        }
    }
}

const ConvosContainer = connect(mapStateToProps, mapDispatchToProps)(Convos);

export default ConvosContainer;
