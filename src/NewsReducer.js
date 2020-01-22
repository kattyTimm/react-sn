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

/*
  sidebar: {
	  friends:[
		  	{id: 1, name: 'Katty'},
			{id: 2, name: 'Dima'},
			{id: 3, name: 'Lera'},
			{id: 4, name: 'Lena'}
	  ], newValue: ''
   },
*/

export const NewsReducer = (state = initialSate, action) => {	
        
  switch(action.type){
  	case ADD_HEADLINE:
  		let text = {id: 1, name: state.newValue}
					state.friends.push(text); 
				 	state.newValue = '';

				 	return state;

	case CHANGE_TEXTAREA:
		state.newValue = action.text;	
		return state;	

	default: 
	return state;		 	
  	
  }
}

export const addNewsActionCreator = () => ({type: CHANGE_TEXTAREA});

export const addNewOnChangeActionCreator = (val) => ({type: ADD_HEADLINE, text: val});


