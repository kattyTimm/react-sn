import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import classes from './Profile.module.css';
import Profile from './Profile'; // posts={props.state.posts} value={props.state.newValue} dispatch={props.dispatch}
import {setProfile} from '../../ProfileReducer';

class ProfileContainer extends React.Component {

	componentDidMount(){
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
		.then(resp => {
				console.log(resp.data)
			this.props.setProfile(resp.data)

		});
	}
	   render(){

				return <div className="">
				        <Profile {...this.props}  profile={this.props.profile} /> 
					</div>
	}
}

let mapStateToProps = (state) => ({profile: state.profile.profile});

export default connect(mapStateToProps, {setProfile})(ProfileContainer);
