import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import classes from './Profile.module.css';
import Profile from './Profile'; 
import {setProfile} from '../../ProfileReducer';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {

	componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
		.then(resp => {
			this.props.setProfile(resp.data)
		});
	}
	   render(){

				return (
				        <Profile {...this.props}  profile={this.props.profile} /> 
					)
	}
}

let mapStateToProps = (state) => ({profile: state.profile.profile});

 let UrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile})(UrlDataContainerComponent);

//  connect и withRouter по факту возвращают новые компоненты. connect  берет данные из стора. 
// withRouter возмет данные из урла и закинет в компенету Profile
