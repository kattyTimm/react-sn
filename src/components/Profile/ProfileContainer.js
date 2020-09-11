import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

import classes from './Profile.module.css';
import Profile from './Profile';
import {setProfile} from '../../ProfileReducer';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {getProfileThunk, updateStatusThunk, setStatusThunk, savePhoto, saveProfile} from '../../ProfileReducer';

class ProfileContainer extends React.Component {

  refreshProfile(){
    let userId = this.props.match.params.userId;  // this.props.match.params.userId берет айди пользователя из урла
    if(!userId){
      userId = this.props.authorizedId;
        if(!userId) {
          this.props.history.push("/login")
        }
    }
    this.props.getProfileThunk(userId);
    this.props.setStatusThunk(userId);
	}


 /*componentDidMount вызывается единожды, когда компонента монтируется*/
	componentDidMount(){
    this.refreshProfile();
	}



 /*componentDidUpdate вызывается, когда меняются данные*/
	componentDidUpdate(prevProps, prevState){
    if(this.props.match.params.userId != prevProps.match.params.userId) this.refreshProfile();

	}

	   render(){

				return (
				        <Profile {...this.props}  profile={this.props.profile}
				         status={this.props.status} updateStatus={this.props.updateStatusThunk}
                 isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}
                 saveProfile={this.props.saveProfile}/>
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
 	connect(mapStateToProps, {getProfileThunk, setStatusThunk, updateStatusThunk, savePhoto, saveProfile}),
 	 withRouter,
  //   WithAuthRedirect,
 	)(ProfileContainer);

//  connect и withRouter по факту возвращают новые компоненты. connect  берет данные из стора.
// withRouter возмет данные из урла и закинет в компенету Profile
