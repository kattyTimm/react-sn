import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthThunk} from '../../auth-reducer';
import {authApi} from '../../api/api';


class HeaderContainer extends React.Component {

	componentDidMount(){
		
/*	
	  axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
	  	withCredentials: true  //withCredentials прицепит куку с айди польззователя (на серваке я залогинина)
	  })
	  

	  authApi.getAuth()
	    .then(data => {	    
            if(data.resultCode == 0){
            	// деструктуризация : 
            	let {id, email, login} = data.data;
            	this.props.setAuthUserData(id, email, login); // axios в data упаковывет респонс
            }
	  });
 */ 	  
         this.props.getAuthThunk();
	 }
  
		render(){
				return <Header {...this.props}/>
		}

}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});


export default connect(mapStateToProps, {getAuthThunk})(HeaderContainer);
// getAuthThunk пойдет в пропсы к HeaderContainer