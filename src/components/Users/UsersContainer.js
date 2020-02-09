import React from 'react';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from '../../UsersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
  return  {
         users: state.settingParam.users,
         pageSize: state.settingParam.pageSize, // количество страниц
         totalUsersCount: state.settingParam.totalUsersCount, // общее количество пользователей
         currentPage: state.settingParam.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
         return {
                 follow: (id) => { dispatch(followAC(id))},
                 unfollow: (id)=> { dispatch(unfollowAC(id))},
                 setUsers: (users) => {dispatch(setUsersAC(users))},
                 setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
                 setTotalUsersCount: (count) => {dispatch(setTotalUsersCountAC(count))}
                }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
