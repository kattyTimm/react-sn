import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return <div className="ProfileInfo">
			     <div>
				    <img src="https://im0-tub-ru.yandex.net/i?id=44675ac9a817fef8da7d097ec3c25273&n=13" className={classes.ava} />
			     </div>
				 <div>
					<a> ava + description </a>
				 </div>
			</div>	
}

export default ProfileInfo;