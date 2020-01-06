//import React from 'react';
//import store from './state';  

const CREATE_DIALOG = 'CREATE-DIALOG';
const ADD_DIALOG = 'ADD-DIALOG';

export const dialogsReducer = (state, action) => {	

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

