//import React from 'react';
//import store from './state';  

const CREATE_DIALOG = 'CREATE-DIALOG';
const ADD_DIALOG = 'ADD-DIALOG';

let initialState = {
	dialogsData: [
			{id: 1, name: 'Katty'},
			{id: 2, name: 'Dima'},
			{id: 3, name: 'Lera'},
			{id: 4, name: 'Lena'}
		],		
		 messagesData: [
			{id: 1, message: 'HI'},
			{id: 2, message: 'How are you?'},
			{id: 3, message: 'Yo'},
			{id: 4, message: 'zopa'}
		],
		areaVal: ''
};

export const dialogsReducer = (state = initialState, action) => {	

	switch(action.type){
		case CREATE_DIALOG:
			state.areaVal = action.newDialog;
			return state;
		case ADD_DIALOG:
			state.messagesData.push({id: 5, message: state.areaVal});
			state.areaVal = '';
			return state;
		default:
		      return state;	

	}
    
}


export const createDialog = (text) => ({type: CREATE_DIALOG, newDialog: text});

export const addDialog = () => ({type: ADD_DIALOG});

