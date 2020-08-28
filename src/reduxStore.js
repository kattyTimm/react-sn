import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {profileReducer} from './ProfileReducer';
import {dialogsReducer} from './dialogsReducer';
import {musicReducer} from './musicReducer';
import {NewsReducer} from './NewsReducer';
import {UsersReducer} from './UsersReducer';
import AppReducer from './appReducer';
import AuthReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'; /// имортирую thunk под именем thunkMiddleware
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({profile: profileReducer, dialogs: dialogsReducer,
	musicList: musicReducer, sidebar: NewsReducer, settingParam: UsersReducer, auth: AuthReducer, app: AppReducer,
	form:  formReducer});
 /// form - должно быть написано именно форм

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, /* preloadedState, */ composeEnhancers( applyMiddleware(thunkMiddleware)  )) ;  //...middleware

//let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // applyMiddleware нужно чтобы можно было диспатчить функции, а не только объекты

export default store;

window.__store__ = store;
