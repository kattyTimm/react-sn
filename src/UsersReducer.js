import React from 'react';
import {userAPI} from './api/api';
import {updateObjectInArr} from './utilities/objectObserver';

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
          return {
          	...state, 
          	       users: updateObjectInArr(state.users, action.id, 'id', {followed: true})};
          	         /* state.users.map((obj) => {
                      if(obj.id === action.id){
	                       return {...obj, followed: true};
                        }
                     return obj;
              }) 
          	};*/

        case UNFOLLOW:
        return {
        	...state, 
        	    users: updateObjectInArr(state.users, action.id, 'id', {followed: false})
        	  /*  state.users.map((obj) => {
        	if(obj.id === action.id){
        		return {...obj, followed: false};
        	}
        	return obj;
            }) */
        };

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


export const getUsersThunkCreateor = (page, pageSize) => async dispatch => {
			   dispatch(setIsFetchingAC(true)); // пока ждем ответ isFetching тру
			   dispatch(setCurrentPageAC(page));

		     let resp = await userAPI.getUsers(page, pageSize);

		       dispatch(setIsFetchingAC(false)); // когдв ответ получен isFetching false
		       dispatch(setUsersAC(resp.items));
		       dispatch(setTotalUsersCountAC(resp.totalCount));
	}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
	   	dispatch(toggleFollowingProgressAC(true, id));
			let data = await apiMethod(id);
					 if(data.resultCode == 0){
								dispatch(actionCreator(id));
						 }
		  dispatch(toggleFollowingProgressAC(false, id));
}

export const followThunk = (id) => async dispatch => {
      let apiMethod = await userAPI.follow.bind(userAPI);
      let actionCreator = followSuccess;

			followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
	}


export const unfollowThunk = (id) => async dispatch => {
		let apiMethod = await userAPI.unfollow.bind(userAPI);
		let actionCreator = unfollowSuccess;
		followUnfollowFlow(dispatch, id, apiMethod, actionCreator);			                                            /// передан экшн креэйтор, и так же опрокинута в саму Юзерс
	}
