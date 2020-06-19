import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

import classes from './Profile.module.css';
import Profile from './Profile'; 
import {setProfile} from '../../ProfileReducer';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {getProfileThunk, updateStatusThunk, setStatusThunk} from '../../ProfileReducer';

class ProfileContainer extends React.Component {
         
	componentDidMount(){
		
        let userId = this.props.match.params.userId;  // this.props.match.params.userId берет айди пользователя из урла
        if(!userId) userId = this.props.authorizedId;

        this.props.getProfileThunk(userId);
        this.props.setStatusThunk(userId);		
	}

	   render(){

				return (
				        <Profile {...this.props}  profile={this.props.profile}
				         status={this.props.status} updateStatus={this.props.updateStatusThunk}/> 
					)
	}
}


let mapStateToProps = (state) => ({
		profile: state.profile.profile,	 
		status: state.profile.status,
		authorizedId: state.auth.id,
		isAuth: state.auth.isAuth,
});

export default compose(
 	connect(mapStateToProps, {getProfileThunk, setStatusThunk, updateStatusThunk}),
 	 withRouter,
  //   WithAuthRedirect,
 	)(ProfileContainer);
 	
//  connect и withRouter по факту возвращают новые компоненты. connect  берет данные из стора. 
// withRouter возмет данные из урла и закинет в компенету Profile
