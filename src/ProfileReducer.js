import React from 'react';


const ADD_POST =  'ADD-POST';
const ADD_NEW_POST =  'ADD-NEW-POST';

export const profileReducer = (state, action) => {	
        
  switch(action.type){
  	case ADD_POST:
  		let newPost = {id: 5, message: state.newValue, likesCount: 25};
					state.posts.push(newPost); 
				 	state.newValue = '';
				 	return state;

	case ADD_NEW_POST:
		state.newValue = action.newPost;	
		return state;	
	default: 
	return state;		 	
  	
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const addNewPostActionCreator = (val) => ({type: ADD_NEW_POST, newPost: val});


