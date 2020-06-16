//import React from 'react';
//import store from './state';  

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
		]
};

export const dialogsReducer = (state = initialState, action) => {	
	switch(action.type){
			
		case ADD_DIALOG:{         
            /*
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push({id: 5, message: state.areaVal});
            stateCopy.areaVal = '';
            */
			return {...state, messagesData: [...state.messagesData, {id: 5, message: action.addNewMessage}]};
			     //  {...state, messagesData: [...state.messagesData, {id: 5, message: state.areaVal}], areaVal: ''};
		}
			
		default:
		      return state;	

	}
    
}

export const addDialog = (text) => ({type: ADD_DIALOG, addNewMessage: text});

