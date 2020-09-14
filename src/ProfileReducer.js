import React from 'react';
import {stopSubmit} from 'redux-form';
import {profileApi} from './api/api';


const ADD_POST =  'ADD-POST';
//const ADD_NEW_POST =  'ADD-NEW-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SET_PHOTO = 'SET-PHOTO';

let initialSate = {
	posts: [
				   {id: 1, message: 'post 1', likesCount: 12},
				   {id: 2, message: 'post 2', likesCount: 20}
			   ],
  profile: null,
  status: ''
}

export const profileReducer = (state = initialSate, action) => {

  switch(action.type){

  	case ADD_POST:{
			return {...state, posts: [...state.posts, {id: 5, message: action.newPost, likesCount: 25}]};
     }

/*	case ADD_NEW_POST:{
		    return {...state, newValue: action.newPost};
	}
	*/
	case SET_PROFILE:{
		return {...state, profile: action.profile};
	}
	/*case PUT_STATUS: {
		return {...state, status: action.status};
	}*/
	case SET_STATUS: {
		return {...state, status: action.status};
	}
	case DELETE_POST: {
		return {...state, posts: state.posts.filter(elem => elem.id != action.id)};
	}
	case SET_PHOTO: {
		return {...state, profile: {...state.profile, photos: action.photos}}
	}

	default:
	return state;

  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPost: newPostText});
//export const addNewPostActionCreator = (val) => ({type: ADD_NEW_POST, newPost: val});

export const deletePost = (id) => ({type: DELETE_POST, id});
const setProfile = (profile) => ({type: SET_PROFILE, profile:profile});
const setStatus = (status) => ({type: SET_STATUS, status: status});
const savePhotoSuccess = (photos) => ({type: SET_PHOTO, photos: photos});


// !!! В санку приходит не только диспатч, но и стэйт, смотри функцию saveProfile ниже

export const getProfileThunk = (id) => async dispatch => {
	 let resp = await	profileApi.getProfile(id);

			dispatch(setProfile(resp.data));
}
/*
export const getProfileThunk = (id) => {
	return (dispatch) => {
		 profileApi.getProfile(id).then(resp => {
			dispatch(setProfile(resp.data));
		});
	}
}
*/
export const setStatusThunk = (id) =>  async dispatch => {
          let resp = await profileApi.getStatus(id);
           	  dispatch(setStatus(resp.data));
	}

export const updateStatusThunk = (str) => async dispatch => {
        let resp = await profileApi.updateStatus(str);

           	  if(resp.data.resultCode === 0){
								console.log(resp);
           	     dispatch(setStatus(str));
           	  }
	}

	export const savePhoto = (file) => async dispatch => {

		    let resp = await profileApi.savePhoto(file);

				 if(resp.data.resultCode === 0){
					 console.log(resp);
            dispatch(savePhotoSuccess(resp.data.data.photos));
				 }
	}


	export const saveProfile = (profile) => async (dispatch, getState) => {
        const userId = getState().auth.id;
		    let resp = await profileApi.saveProfile(profile);

				 if(resp.data.resultCode === 0){
					 console.log(resp);
              dispatch(getProfileThunk(userId));
				 }else{

              console.log(resp.data.messages);
					   //   dispatch( stopSubmit('profileForm', { "contacts" : {"facebook": resp.data.messages[0]} }) );
							dispatch( stopSubmit( 'profileForm', {_error: resp.data.messages[0]} ) );
							return Promise.reject(resp.data.messages[0]);
				 }
	}
