import {createStore, combineReducers} from "redux";
import {profileReducer} from './ProfileReducer';
import {dialogsReducer} from './dialogsReducer';
import {musicReducer} from './musicReducer';
import {NewsReducer} from './NewsReducer';
import {UsersReducer} from './UsersReducer';

let reducers = combineReducers({profile: profileReducer, dialogs: dialogsReducer, musicList: musicReducer, sidebar: NewsReducer, settingParam: UsersReducer}); 
let store = createStore(reducers);

export default store;

window.store = store;