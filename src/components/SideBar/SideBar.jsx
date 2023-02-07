import { useSelector } from "react-redux";

import NavDiv from "../common/NavDiv";
import { isLoggedInSelector, sideBarFriendsSelector } from "../../utils/selectors";

import "../../styles/SideBar.scss";

const SideBar = () => {

    const friends = useSelector(sideBarFriendsSelector);
    const isLoggedIn = useSelector(isLoggedInSelector);

    const friendsElements = friends.map(friend => {
        return (
            <div key={friend.id} className="sidebar-item">
                <img alt={friend.name} src={friend.profilePicture} />
                <NavDiv to={`/dialogs/${friend.id}`} name={friend.name} />
            </div>
        )
    });

    if (!isLoggedIn) return null;

    return (
        <div className="sidebar-area">
            <div className="sidebar-title">Your Best Friends</div>
            <div className="sidebar-list">{friendsElements}</div>
        </div>
    )
};

export default SideBar;