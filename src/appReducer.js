import React from 'react';
import {stopSubmit} from 'redux-form'; // actionCreator от redux form

import {getAuthThunk} from './auth-reducer';

const INIALAZED_SUCCESS =  'INIALAZED-SUCCESS'; // установливает данные пользователя

let initialSate = {
      initialazed: null,
};

 const AppReducer = (state = initialSate, action) => {	
	// данные которые нужны для преобразования стэйта лежат в action
  switch(action.type){
  	case INIALAZED_SUCCESS:{
            	return {...state, initialazed: true};
            	// свойства которые сидят в action.data перезатрут, то что лежит в state
  	}

	default: 
	return state;		 	
  	
  }
};

const initialazedSuccess = () => ({type: INIALAZED_SUCCESS});

export const initializeApp = () => dispatch => {
      Promise.all([dispatch(getAuthThunk())]).then( () => dispatch(initialazedSuccess()));
}


export default AppReducer;
