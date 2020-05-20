import React from 'react';
import {profileApi} from './api/api';


const ADD_POST =  'ADD-POST';
const ADD_NEW_POST =  'ADD-NEW-POST';
const SET_PROFILE = 'SET-PROFILE';
//const PUT_STATUS = 'PUT-STATUS';
const SET_STATUS = 'SET-STATUS';

let initialSate = {
	posts: [
				   {id: 1, message: 'post 1', likesCount: 12},
				   {id: 2, message: 'post 2', likesCount: 20}
			   ],
  newValue: '',
  profile: null,
  status: ''	
}

export const profileReducer = (state = initialSate, action) => {

  switch(action.type){

  	case ADD_POST:{
			return {...state, posts: [...state.posts, {id: 5, message: state.newValue, likesCount: 25}], newValue: ''};
     }

	case ADD_NEW_POST:{
		    return {...state, newValue: action.newPost};
	}
	case SET_PROFILE:{
		return {...state, profile: action.profile};
	}
	/*case PUT_STATUS: {
		return {...state, status: action.status};
	}*/
	case SET_STATUS: {
		return {...state, status: action.status};
	}

	default:
	return state;

  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const addNewPostActionCreator = (val) => ({type: ADD_NEW_POST, newPost: val});

const setProfile = (profile) => ({type: SET_PROFILE, profile:profile});
//const putStatus = (status) => ({type: PUT_STATUS, status: status});
const setStatus = (status) => ({type: SET_STATUS, status: status});

export const getProfileThunk = (id) => {
	return (dispatch) => {
		 profileApi.getProfile(id).then(resp => {		
			dispatch(setProfile(resp.data));
		});		 
	}
}

export const setStatusThunk = (id) => {
	return(dispatch) => {
           profileApi.getStatus(id).then(resp => {
           	  dispatch(setStatus(resp.data));
           });
	}
}

export const updateStatusThunk = (str) => {
	return(dispatch) => {
           profileApi.updateStatus(str).then(resp => {
           	  if(resp.data.resultCode === 0){
           	     dispatch(setStatus(str));
           	  }
           });
	}
}