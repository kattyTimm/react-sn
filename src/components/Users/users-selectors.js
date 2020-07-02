import React from 'react';

export const getUsers = (state) => { 
	return state.settingParam.users
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

export const getIsFetching = (state) => {
	return state.settingParam.isFetching
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