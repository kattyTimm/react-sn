import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';

const ProfileInfo = (props) => {
  if(!props.profile){
		 return <Preloader />
	}

	return <div className="ProfileInfo">
			     <div>
				    <img src="https://im0-tub-ru.yandex.net/i?id=44675ac9a817fef8da7d097ec3c25273&n=13" className={classes.ava} />
			     </div>
				 <div>
				  <img src={props.profile.photos.small} />
					<a> ava + description </a>
				 </div>
			</div>
}

export default ProfileInfo;
