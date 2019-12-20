import React from 'react';
import ReactDOM from 'react-dom';

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
		]
   },
   
   sidebar: {
	  friends:[
		  	{id: 1, name: 'Katty'},
			{id: 2, name: 'Dima'},
			{id: 3, name: 'Lera'},
			{id: 4, name: 'Lena'}
	  ]
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
	
	_callSubscriber(){
		console.log('state changed');
	},
	
	addPost(){
		let newPost = {id: 5, message: this._state.profile.newValue, likesCount: 25};
		this._state.profile.posts.push(newPost); 
		this._state.profile.newValue = '';
		this._callSubscriber();
	},
	
	addNewPost(newPost){
		this._state.profile.newValue = newPost;
		this._callSubscriber();
	},
	
	subscribe(observer){
		this._callSubscriber = observer;
	}
}

export default store;

window.store = store;

// let renderTree = () => {
	// console.log('state changed');
// }

// let state = {
	 // profile: {
		// posts: [
				   // {id: 1, message: 'post 1', likesCount: 12},
				   // {id: 2, message: 'post 2', likesCount: 20}
			   // ], newValue: 'newValue'
	 // },
	
	 // dialogs: {
		 // dialogsData: [
			// {id: 1, name: 'Katty'},
			// {id: 2, name: 'Dima'},
			// {id: 3, name: 'Lera'},
			// {id: 4, name: 'Lena'}
		// ],		
		 // messagesData: [
			// {id: 1, message: 'HI'},
			// {id: 2, message: 'How are you?'},
			// {id: 3, message: 'Yo'},
			// {id: 4, message: 'zopa'}
		// ]
   // },
   
   // sidebar: {
	  // friends:[
		  	// {id: 1, name: 'Katty'},
			// {id: 2, name: 'Dima'},
			// {id: 3, name: 'Lera'},
			// {id: 4, name: 'Lena'}
	  // ]
   // },
   
	// settingParam: {
		// parametrs: [
			  // {sett: 1, key: 'a'},	
			  // {sett: 2, key: 'b'},	
			  // {sett: 3, key: 'c'}	
		// ]
	// },
	
	// musicList: {
		// music: [
			// {track: 1},
			// {track: 2},
			// {track: 3}
		// ], newVal: ''
	// } 
// }	

// export let writeMusicVal = (value) => {
	// state.musicList.newVal = value;
	// renderTree(); // надо перерисовывать каждый раз как меняется UI
// }

// export let addMusicVal = () => {
	// state.musicList.music.push({track: state.musicList.newVal});
	// renderTree();
	// state.musicList.newVal = '';
// }

// export let addPost = () => {
	// let newPost = {id: 5, message: state.profile.newValue, likesCount: 25};
	// state.profile.posts.push(newPost); 
    // state.profile.newValue = '';
	// renderTree();
// }

// export let addNewPost = (newPost) => {
		// state.sidebar.friends.push({id: 4, name: newPost});
		// renderTree();
// }

// export let changeNewPostText = (value) => {
	// state.profile.newValue = value;
	// renderTree();
// }

// export const subscribe = (observer) => {
	// renderTree = observer;  // observer, publisher, subscriber = это паттерны почитай про них
// }