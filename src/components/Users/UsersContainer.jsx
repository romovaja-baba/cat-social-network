import { getUsers, follow, unfollow } from "../../redux/actions/users-actions"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { usersPageSelector } from "../../utils/selectors";

import Users from "./Users";
import Preloader from "../common/Preloader";
import Pagination from "../common/Pagination/Pagination";

import "../../styles/Users.scss";

const UsersContainer = () => {

    const { usersData, pageSize, totalUserCount, currentPage, isFetching } = useSelector(
        usersPageSelector, shallowEqual
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (!usersData.length) {
            let usersInfo = {currentPage, pageSize};
            dispatch(getUsers(usersInfo))
        }
    }, [currentPage, dispatch, pageSize, usersData]);

    const onPageChanged = useCallback((currentPage) => {
        dispatch(getUsers(currentPage, pageSize));
    }, [pageSize, dispatch]);

    return (
        <div className="users-container">
            <Pagination
                onPageChanged={onPageChanged}
                totalCount={totalUserCount}
                currentPage={currentPage}
                pageSize={pageSize}
            />
            {isFetching ? <Preloader /> :
                <Users
                    users={usersData}
                    followUser={follow}
                    unfollowUser={unfollow}
                />
            }
        </div>
    )
};

export default withAuthRedirect(UsersContainer);