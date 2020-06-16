import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator} from '../../../ProfileReducer';
import {connect} from 'react-redux';

/*
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
*/

let mapStateToProps = (state) => {
	return  {
		posts: state.profile.posts,
       // newPostText: state.profile.newValue
	}
}

let mapDispatchToProps = (dispatch) => {
         return {
         	     //  updateNewPost: (value) =>  dispatch(addNewPostActionCreator(value)),
                   addNewPost: (newPostText) => dispatch(addPostActionCreator(newPostText))
                }	
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;