import React from 'react';
import {authApi} from './api/api';

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

const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

export const getAuthThunk = () => {
       return (dispatch) => {
	       	  authApi.getAuth() // возвращает промис
	       	  .then(resp => {
                    console.log(resp) 

		              if(resp.data.resultCode == 0){
			            	// деструктуризация : 
			            	// если мы залогинины, то засовываем в наш стэйт {id, email, login} и меняем isAuth на true
			            	let {id, email, login} = resp.data.data;
			            	dispatch(setAuthUserData(id, email, login)); // axios в data упаковывет респонс
	       	           }
		        });

        }
}

export default AuthReducer;
