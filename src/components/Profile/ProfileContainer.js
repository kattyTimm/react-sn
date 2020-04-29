import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import classes from './Profile.module.css';
import Profile from './Profile'; 
import {setProfile} from '../../ProfileReducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {getProfileThunk} from '../../ProfileReducer';

class ProfileContainer extends React.Component {
         
	componentDidMount(){

        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;

        this.props.getProfileThunk(userId);

/*
        profileApi.getProfile(userId).then(resp => {
			this.props.setProfile(resp.data)
		});

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
		.then(resp => {
			this.props.setProfile(resp.data)
		});
*/		
	}


	   render(){	   	     
				return (
				        <Profile {...this.props}  profile={this.props.profile} /> 
					)
	}
}

let RedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
		profile: state.profile.profile,	 
});

 let UrlDataContainerComponent = withRouter(RedirectComponent);
//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default connect(mapStateToProps, {getProfileThunk})(UrlDataContainerComponent);

//  connect и withRouter по факту возвращают новые компоненты. connect  берет данные из стора. 
// withRouter возмет данные из урла и закинет в компенету Profile
