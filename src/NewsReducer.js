import React from 'react';


const ADD_HEADLINE =  'ADD-HEADLINE';
const CHANGE_TEXTAREA =  'CHANGE-TEXTAREA';

let initialSate = {
	friends:[
		  	{id: 1, name: 'Katty'},
			{id: 2, name: 'Dima'},
			{id: 3, name: 'Lera'},
			{id: 4, name: 'Lena'}
	  ], newValue: ''
}


export const NewsReducer = (state = initialSate, action) => {	
  switch(action.type){
  	case ADD_HEADLINE:{
            	return {...state, friends: [...state.friends, {id: 6, name: state.newValue}], newValue: ''};
  	}
  		  	
	case CHANGE_TEXTAREA:{
		return {...state, newValue: action.text};  
	}
		

	default: 
	return state;		 	
  	
  }
}

export const addNewsActionCreator = () => ({type: ADD_HEADLINE});

export const addNewOnChangeActionCreator = (val) => ({type: CHANGE_TEXTAREA, text: val});


