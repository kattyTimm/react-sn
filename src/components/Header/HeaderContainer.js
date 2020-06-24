import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logoutThunk} from '../../auth-reducer';
import {authApi} from '../../api/api';


class HeaderContainer extends React.Component {
  
		render(){
				return <Header {...this.props} />
		}

}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});


export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);
// getAuthThunk пойдет в пропсы к HeaderContainer