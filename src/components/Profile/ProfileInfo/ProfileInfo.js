import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';

const ProfileInfo = (props) => {
	// пока не пришли данные, показывается прелоадер
  if(!props.profile){
		 return <Preloader />
	}

	return <div className="ProfileInfo">
			     <div>
				    <img src="https://im0-tub-ru.yandex.net/i?id=44675ac9a817fef8da7d097ec3c25273&n=13"  className={classes.ava}/>
			     </div>
				 <div>
					  <p>обо мне: {props.profile.aboutMe}</p>
					  <div> контакты: <br />
                            <p>facebook: {props.profile.contacts.facebook}</p>
                            <p>vkontacte: {props.profile.contacts.vk}</p>
					  </div>
					  <img src={props.profile.photos.large}  className={classes.mainPhoto}/>
						<a> ava + description </a>
				 </div>
			</div>
}

export default ProfileInfo;
