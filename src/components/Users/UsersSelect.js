import React from 'react';

export const getUsers = state => { return state.settingParam.users };

export const getPageSize = state => { return state.settingParam.pageSize };

export const getTotalUsersCount = state => {return state.settingParam.totalUsersCount };

export const getCurrentPage = state => {return state.settingParam.totalUsersCount };

export const getIsFetching = state => {return state.settingParam.isFetching };

export const getFollowingInProgress = state => {return state.settingParam.followingInProgress };