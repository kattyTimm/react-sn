import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

import {Input} from '../Common/FormsControls/FormControls';
import s from '../Common/FormsControls/FormControls.module.css';
import {requiredFields, maxLengthCreators} from '../../utilities/validators/validators';
import {loginThunk} from '../../auth-reducer';

const maxLengthLogin20 = maxLengthCreators(20);

const LoginForm = (props) => {
  
    return (               
               <form onSubmit={props.handleSubmit}>
                     <div><Field placeholder={"email"} component={Input} name={"email"} validate={[requiredFields, maxLengthLogin20]} /></div>
                     <div><Field placeholder={"password"} component={Input} name={"password"} type={"password"} validate={[requiredFields, maxLengthLogin20]} /></div>
                     <div><Field type={"checkbox"} component={Input} name={"rememberMe"}  />remember me</div>
                     <div>
                     {props.error &&  <div className={s.formSumaryError}>
                                         {props.error}
                                     </div>               
                      }             
                          <button>Login</button>        
                     </div>
               </form>
            )
}


//  в функцию reduxForm надо засунуть ту компоненту, которую надо обернуть контейнерной компонентой
const LoginReduxForm = reduxForm({
    form: 'login'  // имя формы в state (state.form.post), уникальное имя формы
})(LoginForm);

const Login = (props) => {
 
      const onSubmit = (data) => {
         let {email, password, rememberMe} = data;
         props.loginThunk(email, password, rememberMe);
      }
  
     if(props.isAuth) return <Redirect to={"/profile"} />

	return <div>
  			   <h1> Login </h1>
  			   <LoginReduxForm onSubmit={onSubmit}/>
	       </div>
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps, {loginThunk})(Login);

