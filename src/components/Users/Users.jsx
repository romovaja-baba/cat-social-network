import styles from "./Users.module.css";

import Pagination from "../Pagination/Pagination";
import User from "./User/User"

const Users = ({users, totalUserCount, pageSize, currentPage, onPageChanged, follow, unfollow}) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalUserCount / pageSize); i++) {
        pages.push(i)
    }

    return (
        <div className={styles.usersArea}>
            <Pagination
                onPageChanged={onPageChanged}
                totalCount={totalUserCount}
                currentPage={currentPage}
                pageSize={pageSize}
            />
            <div className={styles.itemsArea}>
                {users.map(user =>
                    <User
                        user={user}
                        key={user.id}
                        follow={follow}
                        unfollow={unfollow} />
                )}
            </div>
            <div className={styles.buttonArea}>
            </div>
        </div>
    )
};

export default Users;