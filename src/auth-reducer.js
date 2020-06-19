import React from 'react';
import {stopSubmit} from 'redux-form'; // actionCreator от redux form

import {authApi} from './api/api';

const SET_USER_DATA =  'SET-USER-DATA'; // установливает данные пользователя

let initialSate = {
      id: null,
      email: null,
      login: null,
      isAuth: false
};

 const AuthReducer = (state = initialSate, action) => {	
	// данные которые нужны для преобразования стэйта лежат в action
  switch(action.type){
  	case SET_USER_DATA:{
            	return {...state, ...action.payload};
            	// свойства которые сидят в action.data перезатрут, то что лежит в state
  	}

	default: 
	return state;		 	
  	
  }
};

const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA,  payload: {id, email, login, isAuth} });

export const getAuthThunk = () => {
       return (dispatch) => {
	       	  authApi.getAuth() // возвращает промис
	       	  .then(resp => {
                   console.log(resp)

		              if(resp.data.resultCode == 0){
			            	// деструктуризация : 
			            	// если мы залогинины, то засовываем в наш стэйт {id, email, login} и меняем isAuth на true
			            	let {id, email, login} = resp.data.data;
			            	dispatch(setAuthUserData(id, email, login, true)); // axios в data упаковывет респонс
	       	           }
		        });

        }
}

// сам loginThunk выступает в качетсве creator, сама санка  начинается с 
export const loginThunk = (email, password, rememberMe = false) => dispatch => {

       authApi.login(email, password, rememberMe)
               .then(resp => { 
                       console.log(resp);

                       if(resp.data.resultCode == 0){
                          dispatch(getAuthThunk());   
                      }else{
                        let message = (resp.data.messages[0].length > 0) ? resp.data.messages[0] : 'Some error';
                                                      //email: 'Incorrect email', password: 'Wrong pass, try again'                                                 
                        dispatch(stopSubmit('login', {_error: message}));
                                            // свойство _error позволяет получить общую ошибку всей формы, 
                                            // чтобы не подсвечивать отдельные поля ввода
                      }
                  }
                )
}

export const logoutThunk = () => dispatch => {
    authApi.logout().then(resp => {
                            if(resp.data.resultCode === 0) dispatch(setAuthUserData(null, null, null, false)); 
                        }
              
                      )
}

export default AuthReducer;
