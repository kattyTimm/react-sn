import React from 'react';
import {stopSubmit} from 'redux-form'; // actionCreator от redux form

import {authApi, securityAPI} from './api/api';

const SET_USER_DATA =  'sn/auth/SET-USER-DATA'; // установливает данные пользователя
const GET_CAPTCHA_URL =  'sn/auth/SET-CAPTCHA-URL';

let initialSate = {
      id: null,
      email: null,
      login: null,
      isAuth: false,
      captchaUrl :null
};

 const AuthReducer = (state = initialSate, action) => {
	// данные которые нужны для преобразования стэйта лежат в action
  switch(action.type){
  	case SET_USER_DATA:{
            	return {...state, ...action.payload};
            	// свойства которые сидят в action.data перезатрут, то что лежит в state
  	}
    case SET_CAPTCHA_URL:{
      return {...state, ...action.payload};
    }

	default:
	return state;

  }
};

const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA,  payload: {id, email, login, isAuth} });
const setCaptchaUrl = (captchaUrl) => ({type: GET_CAPTCHA_URL, payload: captchaUrl});

export const getAuthThunk = () => async dispatch => {
       let resp = await authApi.getAuth(); // возвращает промис


		             if(resp.data.resultCode == 0){
			            	// деструктуризация :
			            	// если мы залогинины, то засовываем в наш стэйт {id, email, login} и меняем isAuth на true
			            	let {id, email, login} = resp.data.data;
			            	dispatch(setAuthUserData(id, email, login, true)); // axios в data упаковывет респонс
	       	       }


}

// сам loginThunk выступает в качетсве creator, сама санка  начинается с dispatch
export const loginThunk = (email, password, rememberMe = false) => async dispatch => {

      let resp = await authApi.login(email, password, rememberMe);

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

export const logoutThunk = () => async dispatch => {
  let resp = await authApi.logout();
        if(resp.data.resultCode === 0) dispatch(setAuthUserData(null, null, null, false));
}

export const getCaptchaUrl = () => async dispatch => {
  let resp = await securityAPI.getCaptchaUrl();
  let url = resp.data.url;

  dispatch(setAuthUserData(null, null, null, false));
}

export default AuthReducer;
