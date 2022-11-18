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
import axios from "axios";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

const UsersAPIComponent = ({ users, follow, unfollow, setUsers, pageSize,
    totalUserCount, currentPage, isFetching, setCurrentPage, setTotalUserCount, setFetching }) => {

    useEffect(() => {
        if (users.length) return;
        onPageChanged();
    });

    let onPageChanged = (pageNumber) => {
        setFetching(true);
        setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then((response) => {
                setFetching(false);
                setUsers(response.data.items);
                setTotalUserCount(response.data.totalCount)
            })
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