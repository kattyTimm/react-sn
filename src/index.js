import React from 'react';
import ReactDOM from 'react-dom';
import store from './state';  
import {BrowserRouter} from 'react-router-dom';
import App from './App';
// import {addPost} from './state';
// import {addNewPost, subscribe} from './state';
// import {changeNewPostText, writeMusicVal, addMusicVal} from './state';


export let renderTree = () => {	
	ReactDOM.render(
	<BrowserRouter>
		<App data={store.getState()} dispatch={store.dispatch.bind(store)} />
	</BrowserRouter>
	,document.getElementById('root'));
}

renderTree(store.getState()); // renderTree отрисосвывает Апп
store.subscribe(renderTree);




