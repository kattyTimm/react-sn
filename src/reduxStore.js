import {createStore, combineReducers, applyMiddleware} from "redux";
import {profileReducer} from './ProfileReducer';
import {dialogsReducer} from './dialogsReducer';
import {musicReducer} from './musicReducer';
import {NewsReducer} from './NewsReducer';
import {UsersReducer} from './UsersReducer';
import AuthReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'; /// имортирую thunk под именем thunkMiddleware

let reducers = combineReducers({profile: profileReducer, dialogs: dialogsReducer, 
	musicList: musicReducer, sidebar: NewsReducer, settingParam: UsersReducer, auth: AuthReducer}); 
let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // applyMiddleware нужно чтобы можно было диспатчить функции, а не только объекты 

export default store;

window.store = store;