import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator,
    setTotalUserCountActionCreator
} from "../../redux/users-reducer";
import { connect } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

import Users from "./Users";

const UsersAPIComponent = ({ users, follow, unfollow, setUsers, pageSize,
    totalUserCount, currentPage, setCurrentPage, setTotalUserCount }) => {

    useEffect(() => {
        if (users.length) return;
        onPageChanged();
    });

    let onPageChanged = (pageNumber) => {
        setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then((response) => {
                setUsers(response.data.items);
                setTotalUserCount(response.data.totalCount)
            })
    }

    return (
        <Users
            users={users}
            totalUserCount={totalUserCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            follow={follow}
            unfollow={unfollow}
        />
    )
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountActionCreator(totalCount))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;