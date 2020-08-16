import React from 'react';
import ReactDOM from 'react-dom';

import {profileReducer, addPostActionCreator, deletePost} from './ProfileReducer';
import {profileApi} from './api/api';


   let initialSate = {
	posts: [
				   {id: 1, message: 'post 1', likesCount: 12},
				   {id: 2, message: 'post 2', likesCount: 20}
			   ],	
    };

it('new post should be added', () => {
    //1. prepeare some starting data

    let action = addPostActionCreator('test action for add new post');

     // 2. action
     let newState = profileReducer(initialSate, action); 

     // 3. expextations, функция expect импортируется автот-ки 
    // expect(newState.posts.length).toBe(3);
   //  expect(newState.posts[2].message).toBe('test action for add new post');
});

it('length after removing decremented', () => {
    //1. prepeare some starting data

    let action = deletePost(1);
     
     // 2. action
     let newState = profileReducer(initialSate, action); 

     // 3. expextations, функция expect импортируется автот-ки 
     expect(newState.posts.length).toBe(1);

});

it('length is not changed if id incorrect', () => {
    //1. prepeare some starting data

    let action = deletePost(1000);
     
     // 2. action
     let newState = profileReducer(initialSate, action); 

     // 3. expextations, функция expect импортируется автот-ки 
     expect(newState.posts.length).toBe(2);

});