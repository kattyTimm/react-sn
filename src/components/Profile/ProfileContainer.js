import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

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
	
	}

	   render(){	   	     
				return (
				        <Profile {...this.props}  profile={this.props.profile} /> 
					)
	}
}


let mapStateToProps = (state) => ({
		profile: state.profile.profile,	 
});

export default compose(
 	connect(mapStateToProps, {getProfileThunk}),
 	 withRouter,
     withAuthRedirect,
 	)(ProfileContainer);
 	
//  connect и withRouter по факту возвращают новые компоненты. connect  берет данные из стора. 
// withRouter возмет данные из урла и закинет в компенету Profile
