import React from 'react';
import { createSelector } from 'reselect'

const getUsersSelector = (state) => { 
	return state.settingParam.users;
};


// state придет в getUsersSuperSelector из mapStateToProps из UsersContainer
export const getUsers = createSelector(getUsersSelector, 
    (users) => {  
            return users.filter(u => true);
});

/*   Можно передать несколько зависимостей:

export const getUsersSuperSelector = createSelector(getUsers, getIsFetching, (users, isFetching) => {
    return users.filter(u => true);
});
  
*/

export const getIsFetching = (state) => {
	return state.settingParam.isFetching
};

export const getPageSize = (state) => { 
	return state.settingParam.pageSize
};

export const getTotalUsersCount = (state) => {
	return state.settingParam.totalUsersCount
};

export const getCurrentPage = (state) => {
	return state.settingParam.currentPage
};



export const getFollowingInProgress = (state) => {
	return state.settingParam.followingInProgress
};

/*

let mapStateToProps = (state) => { // Это  пропсы для функциональной компоненты
  return  {
         users: state.settingParam.users,
         pageSize: state.settingParam.pageSize, // количество страниц
         totalUsersCount: state.settingParam.totalUsersCount, // общее количество пользователей
         currentPage: state.settingParam.currentPage,
         isFetching:  state.settingParam.isFetching,
         followingInProgress: state.settingParam.followingInProgress
  }
}

*/