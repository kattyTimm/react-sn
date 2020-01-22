import React from 'react';
import ReactDOM from 'react-dom';
import {profileReducer} from './ProfileReducer';
import {dialogsReducer} from './dialogsReducer';
import {musicReducer} from './musicReducer';


 let store = {
	_state: {
	 profile: {
		posts: [
				   {id: 1, message: 'post 1', likesCount: 12},
				   {id: 2, message: 'post 2', likesCount: 20}
			   ], newValue: ''
	 },
	
	 dialogs: {
		 dialogsData: [
			{id: 1, name: 'Katty'},
			{id: 2, name: 'Dima'},
			{id: 3, name: 'Lera'},
			{id: 4, name: 'Lena'}
		],		
		 messagesData: [
			{id: 1, message: 'HI'},
			{id: 2, message: 'How are you?'},
			{id: 3, message: 'Yo'},
			{id: 4, message: 'zopa'}
		],
		areaVal: ''
   },
   
   sidebar: {
	  friends:[
		  	{id: 1, name: 'Katty'},
			{id: 2, name: 'Dima'},
			{id: 3, name: 'Lera'},
			{id: 4, name: 'Lena'}
	  ], newValue: ''
   },
   
	settingParam: {
		parametrs: [
			  {sett: 1, key: 'a'},	
			  {sett: 2, key: 'b'},	
			  {sett: 3, key: 'c'}	
		]
	},
	
	musicList: {
		music: [
			{track: 1},
			{track: 2},
			{track: 3}
		], newVal: ''
	} 
},	
	
	getState(){
		return this._state;
	},

	subscribe(observer){
		this._callSubscriber = observer;
	},	
	
	_callSubscriber(){
		console.log('state changed');
	},

	
	dispatch(action){ // action = это объект {type: 'ADD-POST'}
         
				 this._state.profile = profileReducer(this._state.profile, action);
				 this._state.dialogs = dialogsReducer(this._state.dialogs, action);
				 this._state.musicList = musicReducer(this._state.musicList, action);
				 this._state.sidebar = 
				 this._callSubscriber();

				 if(action.type === 'ADD-HEADLINE'){
					let text = {id: 1, name: this._state.sidebar.newValue}

					this._state.sidebar.friends.push(text);
					this._state.sidebar.newValue = '';
					this._callSubscriber();
				}else if(action.type === 'CHANGE_TEXTAREA'){
					this._state.sidebar.newValue = action.text;
					this._callSubscriber();
				}/*else if(action.type === 'SEARCH'){
                   this._state.musicList.newVal = action.value;
                   this._callSubscriber();
				}else if(action.type === 'FIND-SONG'){
					this._state.musicList.music.push({track: this._state.musicList.newVal});
					this._state.musicList.newVal ='';
					this._callSubscriber();
				}*/
     }
}



export default store;

window.store = store;
