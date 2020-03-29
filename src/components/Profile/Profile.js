import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'; // posts={props.state.posts} value={props.state.newValue} dispatch={props.dispatch}

const Profile = (props) => {
    console.log(props);
	return <div className="Profile">
	        <ProfileInfo profile={props.profile} />
	        <MyPostsContainer store={props.store}  />
		</div>
}

export default Profile;
