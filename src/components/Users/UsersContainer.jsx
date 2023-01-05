import { getUsers, followUser, unfollowUser } from "../../redux/users-reducer";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

const UsersContainer = () => {

    const { usersData, pageSize, totalUserCount, currentPage, isFetching } = useSelector((state) => {
        return state.usersPage
    }, shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!usersData.length) dispatch(getUsers(currentPage, pageSize));
    }, [currentPage, dispatch, pageSize, usersData.length]);

    return (
        <>
            {isFetching ?
                <Preloader /> :
                <Users
                    users={usersData}
                    totalUserCount={totalUserCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={(currentPage) => dispatch(getUsers(currentPage, pageSize))}
                    followUser={followUser}
                    unfollowUser={unfollowUser}
                />}
        </>
    )
};

export default withAuthRedirect(UsersContainer);