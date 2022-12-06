import { getUsers, followUser, unfollowUser } from "../../redux/users-reducer";
import { connect } from "react-redux";
import { useEffect } from "react";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

const UsersAPIComponent = ({ users, pageSize, totalUserCount, currentPage, isFetching, getUsers, followUser, unfollowUser }) => {

    useEffect(() => {
        if (users.length) return;
        onPageChanged(currentPage);
    });

    let onPageChanged = (currentPage) => {
        getUsers(currentPage, pageSize)
    }

    return (
        <>
            {isFetching ?
                <Preloader /> :
                <Users
                    users={users}
                    totalUserCount={totalUserCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    followUser={followUser}
                    unfollowUser={unfollowUser}
                />}
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

const UsersContainer = connect(
    mapStateToProps, { getUsers, followUser, unfollowUser })
    (UsersAPIComponent);

export default UsersContainer;