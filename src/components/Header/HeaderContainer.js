import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthThunk, logoutThunk} from '../../auth-reducer';
import {authApi} from '../../api/api';


class HeaderContainer extends React.Component {

	componentDidMount(){		  
         this.props.getAuthThunk();
	 }
  
		render(){
				return <Header {...this.props} />
		}

}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});


export default connect(mapStateToProps, {getAuthThunk, logoutThunk})(HeaderContainer);
// getAuthThunk пойдет в пропсы к HeaderContainer