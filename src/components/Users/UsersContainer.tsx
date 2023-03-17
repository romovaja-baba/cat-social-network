import { getUsers, follow, unfollow } from "../../redux/actions/users-actions"
import { shallowEqual } from "react-redux";
import { useEffect, useCallback } from "react";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { usersPageSelector } from "../../utils/selectors";

import Users from "./Users";
import Preloader from "../common/Preloader";
import Pagination from "../common/Pagination/Pagination";

import "../../styles/Users.scss";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { IUser, IUsersToApi } from "../../interfaces/users.interface";

interface UsersSelector {
    usersData: IUser[],
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean
}

const UsersContainer = () => {
    const { usersData, pageSize, totalUserCount, currentPage, isFetching } : UsersSelector = useAppSelector(
        usersPageSelector, shallowEqual
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!usersData.length) {
            let usersInfo = { currentPage, pageSize };
            dispatch(getUsers(usersInfo))
        }
    }, [currentPage, dispatch, pageSize, usersData]);

    const onPageChanged = useCallback((currentPage: number) => {
        const usersInfo : IUsersToApi = { currentPage, pageSize };
        dispatch(getUsers(usersInfo));
    }, [pageSize, dispatch]);

    return (
        <div className="users-container">
            <Pagination
                onPageChanged={onPageChanged}
                totalCount={totalUserCount}
                currentPage={currentPage}
                pageSize={pageSize}
                siblingCount={1}
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