import React from 'react';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialSate = {
	users: []
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
      	return {...state, users: [...state.users, ...action.users]}; ///, 
      }

		default:
		return state;
	}
	
	return state;
};

export const followAC = (id) => ({type: FOLLOW, id});

export const unfollowAC = (id) => ({type: UNFOLLOW, id});

export const setUsersAC = (users) => ({type: SET_USERS, users});
