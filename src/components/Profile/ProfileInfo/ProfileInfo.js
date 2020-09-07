import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';

import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../img/user_photo.jpg';

const ProfileInfo = (props) => {
	// пока не пришли данные, показывается прелоадер
  if(!props.profile){
		 return <Preloader />
	}

  const onMainPhotoSelected = (e) => {
     if(e.target.files.length){
         props.savePhoto(e.target.files[0]);
     }
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
					  <img src={props.profile.photos.large || userPhoto}  className={classes.mainPhoto}/>
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
						<ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
				 </div>
			</div>
}

export default ProfileInfo;


// условие {props.profile.photos.large || userPhoto} говорит о том что если props.profile.photos.large вернет false, то пойдет выполняться следующее условие
// то есть загрузится картинка если нет фотки
