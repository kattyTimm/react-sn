import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	
	return <div className="Profile">
	        <ProfileInfo />		  
	        <MyPosts posts={props.state.posts} value={props.state.newValue} postHandler={props.postHandler} />
		</div>
}

export default Profile;