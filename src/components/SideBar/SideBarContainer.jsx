import SideBar from "./SideBar";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.sideBarPage.friendsData
    }
}

let mapDispatchToProps = () => {
    return {}
}

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);

export default SideBarContainer