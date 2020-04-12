import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../auth-reducer';
import {authApi} from '../../api/api';


class HeaderContainer extends React.Component {

	componentDidMount(){
	/*	
	  axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
	  	withCredentials: true  //withCredentials прицепит куку с айди польззователя (на серваке я залогинина)
	  })
	  */

	  authApi.getAuth()
	    .then(data => {	    
            if(data.resultCode == 0){
            	// деструктуризация : 
            	let {id, email, login} = data.data;
            	this.props.setAuthUserData(id, email, login); // axios в data упаковывет респонс
            }
	  });
	}

		render(){
				return <Header {...this.props}/>
		}

}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

/* connect(mapStateToProps, {setAuthUserData})(HeaderContainer) - setAuthUserData попадет в пропсы к Header*/

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);