import {createStore, combineReducers} from "redux";
import {profileReducer} from './ProfileReducer';
import {dialogsReducer} from './dialogsReducer';
import {musicReducer} from './musicReducer';
import {NewsReducer} from './NewsReducer';
import {SettingReducer} from './SettingReducer';

let reducers = combineReducers({profile: profileReducer, dialogs: dialogsReducer, musicList: musicReducer, sidebar: NewsReducer, settingParam: SettingReducer}); 
let store = createStore(reducers);

export default store;