import React from 'react';
import s from './Settings.module.css';

const Settings = (props) => {
let parametrs = props.parametrs.map((elem, i) => <div key={i} id={elem.sett}> {elem.key} </div>);
	return (
	  <div>
	    <p className={s.active}>
			my Settings 
			{parametrs}
		</p>
	  </div>
	)
}

export default Settings;