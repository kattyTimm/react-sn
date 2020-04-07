import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = (props) => {
	return <header className="Header">
        	 <img src="https://pbs.twimg.com/profile_banners/49559323/1525870029/1500x500" /> 
        	 <div className="loginBlock">
        	       {props.isAuth ? 
        	       	props.login 
                    : <NavLink to='/login'>login </NavLink>
        	       }
        	 </div>
	 </header>
}

export default Header;