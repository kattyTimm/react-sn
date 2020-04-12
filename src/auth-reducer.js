import React from 'react';


const SET_USER_DATA =  'SET-USER-DATA'; // установливает данные пользователя

let initialSate = {
	data: {
      id: null,
      email: null,
      login: null,
      isAuth: false
    }
};

 const AuthReducer = (state = initialSate, action) => {	
	// данные которые нужны для преобразования стэйта лежат в action
  switch(action.type){
  	case SET_USER_DATA:{
            	return {...state, ...action.data, isAuth: true};
            	// свойства которые сидят в action.data перезатрут, то что лежит в state
  	}

	default: 
	return state;		 	
  	
  }
};

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

export default AuthReducer;
