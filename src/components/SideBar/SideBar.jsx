import { useSelector } from "react-redux";
import { isLoggedInSelector, sideBarFriendsSelector } from "../../utils/selectors";

import "../../styles/SideBar.scss";
import { Link } from "react-router-dom";

const SideBar = () => {

    const friends = useSelector(sideBarFriendsSelector);
    const isLoggedIn = useSelector(isLoggedInSelector);

    const friendsElements = friends.map(friend => {
        return (
            <Link to={`/dialogs/${friend.id}`} key={friend.id} className="sidebar-item">
                <img alt={friend.name} src={friend.profilePicture} />
                {friend.name}
            </Link>
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