import "../../styles/Users.scss";
import User from "./User/User";

const Users = ({ users, followUser, unfollowUser }) => {

    return (
        <div className="users-area">
            <div className="users-items-area">
                {users.map(user =>
                    <User
                        user={user}
                        key={user.id}
                        followUser={followUser}
                        unfollowUser={unfollowUser} />
                )}
            </div>
        </div>
    )
};

export default Users;