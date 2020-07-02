import React from 'react';
import {userAPI} from './api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialSate = {
	users: [],
	pageSize: 15,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	//followingInProgress: false
	followingInProgress: []
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
			case TOGGLE_IS_FOLLOWING_PROGRESS:{
				return {...state, followingInProgress: action.isFetching  

					? [...state.followingInProgress, action.id] 
				    : [...state.followingInProgress.filter(id => id != action.id)]} // followingInProgress и будет переписываться вызовом toggleFollowingProgressAC
			}; 

		default:
		return state;
	}

	return state;
};



export const followSuccess = (id) => ({type: FOLLOW, id});

export const unfollowSuccess = (id) => ({type: UNFOLLOW, id});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});

export const toggleFollowingProgressAC = (progress, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: progress, id});


export const getUsersThunkCreateor = (page, pageSize) => {
	return (dispatch) => {
			   dispatch(setIsFetchingAC(true)); // пока ждем ответ isFetching тру
			   dispatch(setCurrentPageAC(page));

		       userAPI.getUsers(page, pageSize).then(resp => {

		       dispatch(setIsFetchingAC(false)); // когдв ответ получен isFetching false
		       dispatch(setUsersAC(resp.items));
		       dispatch(setTotalUsersCountAC(resp.totalCount));
		    });
	}
}

export const followThunk = (id) => {
	return (dispatch) => {
             	dispatch(toggleFollowingProgressAC(true, id));

                                  userAPI.follow(id).then(data => {
									  	  if(data.resultCode == 0){
									         dispatch(followSuccess(id));
									      }
									      dispatch(toggleFollowingProgressAC(false, id));

									  });
	}
}

export const unfollowThunk = (id) => {
	return (dispatch) => {
             		dispatch(toggleFollowingProgressAC(true, id));
/*
                        	      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${obj.id}`, {
                        	      	    withCredentials: true,
                        	      	    headers: {
                        	      	    	'API-KEY' : '43040dd6-0e63-4499-9314-9afff1dbb86e'
                        	      	    }

                        	      	})
*/
                        	      userAPI.unfollow(id)
									  .then(data => {
									  	if(data.resultCode == 0){
									         dispatch(unfollowSuccess(id));
									      }
									      dispatch(toggleFollowingProgressAC(false, id)); // это функция, она приходит из пропсов из connect, где в toggleFollowingProgress
									                                            /// передан экшн креэйтор, и так же опрокинута в саму Юзерс
									  });
	}
}