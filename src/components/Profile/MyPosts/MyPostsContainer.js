import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, addNewPostActionCreator} from '../../../ProfileReducer';

const MyPostsContainer = (props) => {
	
	let state = props.store.getState();
  	
    let addPost = () => {
		//props.dispatch(addPostActionCreator());
		props.store.dispatch(addPostActionCreator());  
	} 
	
	let postOnchange = (value) => {
		props.store.dispatch(addNewPostActionCreator(value));
		
	}

	return (<MyPosts updateNewPost={postOnchange} addNewPost={addPost} posts={state.profile.posts} newPostText={state.profile.newValue}/>); // posts={props.posts}
}

export default MyPostsContainer;