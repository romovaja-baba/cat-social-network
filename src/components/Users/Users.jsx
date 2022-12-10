import "../../styles/Users.scss";
import Pagination from "../Pagination/Pagination";
import User from "./User/User";

const Users = ({users, totalUserCount, pageSize, currentPage, onPageChanged, followUser, unfollowUser}) => {

    return (
        <div className="users-area">
            <Pagination
                onPageChanged={onPageChanged}
                totalCount={totalUserCount}
                currentPage={currentPage}
                pageSize={pageSize}
            />
            <div className="users-items-area">
                {users.map(user =>
                    <User
                        user={user}
                        key={user.id}
                        followUser={followUser}
                        unfollowUser={unfollowUser}/>
                )}
            </div>
        </div>
    )
};

export default Users;