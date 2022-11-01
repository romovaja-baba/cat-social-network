import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = () => { }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer