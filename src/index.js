import React from 'react';
import ReactDOM from 'react-dom';
import store from './reduxStore';  
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';



export let renderTree = (state) => {	
	ReactDOM.render(
	<BrowserRouter>
	    <Provider  store={store}>
		     <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
		</Provider>
	</BrowserRouter>
	,document.getElementById('root'));
}

renderTree(store.getState()); // renderTree отрисосвывает Апп

store.subscribe( () => {
	let state = store.getState();
	renderTree(state);
});

/*
let obj = {
	num: 10,
	protocol: 'http',
	bool: true,
	arr: ['1','2','3'],
	classroom: {
		teather: {
			name: 'fff',
			age: 23
		}
	}
}


function copyObj(obj){

		let newObj = {...obj};
		return newObj;

}


let copy = copyObj(obj);

copy.classroom.teather.name = 'zopa';
copy.arr.push('one more val');
obj.classroom.push({key: 'value'});

console.log(obj);
console.log(copy);
*/