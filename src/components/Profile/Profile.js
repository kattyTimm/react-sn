import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	
	return <div className="Profile">
	        <ProfileInfo />		  
	        <MyPosts posts={props.state.posts} value={props.state.newValue} addPost={props.addPost} addNewPost={props.changeNewPost}/>
		</div>
}

export default Profile;