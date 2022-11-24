import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    setFetching
} from "../../redux/users-reducer";
import { connect } from "react-redux";
import { useEffect } from "react";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

const UsersAPIComponent = ({ users, follow, unfollow, setUsers, pageSize,
    totalUserCount, currentPage, isFetching, setCurrentPage, setTotalUserCount, setFetching }) => {

    useEffect(() => {
        if (users.length) return;
        onPageChanged(currentPage);
    });

    let onPageChanged = (currentPage) => {
        setFetching(true);
        setCurrentPage(currentPage);
        usersAPI.getUsers(currentPage, pageSize)
        .then((data) => {
            setFetching(false);
            setUsers(data.items);
            setTotalUserCount(data.totalCount)})
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
                    follow={follow}
                    unfollow={unfollow}
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
    mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    setFetching
})
    (UsersAPIComponent);

export default UsersContainer;