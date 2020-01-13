import {createStore, combineReducers} from "redux";
import {profileReducer} from './ProfileReducer';
import {dialogsReducer} from './dialogsReducer';
import {musicReducer} from './musicReducer';



let reducers = combineReducers({profile: profileReducer, dialogs: dialogsReducer, musicList: musicReducer}); 
let store = createStore(reducers);

export default store;