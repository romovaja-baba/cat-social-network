import Convos from "./Convos";

import { sendMessage, updateNewMessageText } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state, ownProps) => {
    return {
        userConvo: ownProps.userConvo,
        newMessageText: state.dialogsPage.newMessageText
    }
};

const ConvosContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(Convos);

export default ConvosContainer;
