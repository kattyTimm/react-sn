import React from 'react';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialSate = {
	users: [],
	pageSize: 15,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false
};

export const UsersReducer = (state = initialSate, action) => {

	switch(action.type){
		case FOLLOW:
          return {...state, users: state.users.map((obj) => {
                 if(obj.id === action.id){
	                return {...obj, followed: true};
                 }
                 return obj;
            })};

        case UNFOLLOW:
        return {...state, users: state.users.map((obj) => {
        	if(obj.id === action.id){
        		return {...obj, followed: false};
        	}
        	return obj;
        })};

      case SET_USERS: {
      	return {...state, users: action.users}; ///,
      };

			case SET_CURRENT_PAGE:{
				return {...state, currentPage: action.currentPage}
			};

			case SET_TOTAL_USERS_COUNT: {
				return {...state, totalUsersCount: action.count}
			};

			case TOGGLE_IS_FETCHING: {
				return {...state, isFetching: action.isFetching}
			};

		default:
		return state;
	}

	return state;
};



export const followAC = (id) => ({type: FOLLOW, id});

export const unfollowAC = (id) => ({type: UNFOLLOW, id});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
