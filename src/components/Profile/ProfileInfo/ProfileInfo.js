import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';

import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../img/user_photo.jpg';

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(props.status);

  if(!props.profile){
		 return <Preloader />
	}

  const onMainPhotoSelected = (e) => {
     if(e.target.files.length){
         props.savePhoto(e.target.files[0]);
     }
  }

  const toEditMode = () =>{

  }

	return <div className="ProfileInfo">
		         <div>
				    <img src="https://im0-tub-ru.yandex.net/i?id=44675ac9a817fef8da7d097ec3c25273&n=13"  className={classes.ava}/>
			     </div>

				 <div>
            {editMode ?  <ProfileForm profile={props.profile} />
					            :  <ProfileData profile={props.profile} isOwner={props.isOwner} onMainPhotoSelected={onMainPhotoSelected}
                                      goToEditMode={ () => {setEditMode(true)} }/>
            }
						<ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status} />
				 </div>
			</div>
}

const ProfileData = ({profile, isOwner, onMainPhotoSelected, toEditMode}) => {
   return <div>

             <div>
                   <p>full Name: {profile.fullName}</p>
                   <p>looking for a job: {profile.lookingForAJob ? 'yes' : 'no'} </p>
                   {profile.lookingForAJob &&
                       <p>professionals skills: {profile.lookingForAJobDescription} </p>
                   }

                  {Object.keys(profile.contacts).map((key, i) => <Contacts className={classes.contacts} key={i} contactTitle={key} contactValue={profile.contacts.key}/>) }

                  {isOwner && <div>
                                 <p><button onClick={goToEditMode}>edit profile</button></p>
                              </div>
                  }
             </div>


             <img src={profile.photos.large || userPhoto}  className={classes.mainPhoto}/>
             {isOwner && <div>
                            <p><input type="file" onChange={onMainPhotoSelected}/></p>
                         </div>
             }
   </div>
}

const ProfileForm = ({profile}) => {
   return <form>

             <div>
                   <p>full Name: {profile.fullName}</p>
                   <p>looking for a job: {profile.lookingForAJob ? 'yes' : 'no'} </p>
                   {profile.lookingForAJob &&
                       <p>professionals skills: {profile.lookingForAJobDescription} </p>
                   }

                  {Object.keys(profile.contacts).map((key, i) => <Contacts className={classes.contacts} key={i} contactTitle={key} contactValue={profile.contacts.key}/>) }

             </div>
             <img src={profile.photos.large || userPhoto}  className={classes.mainPhoto}/>

   </form>
}

const Contacts = ({contactTitle, contactValue, ...props}) => {
  return <div>
              {contactTitle}: {contactValue}
         </div>
}

export default ProfileInfo;


// условие {props.profile.photos.large || userPhoto} говорит о том что если props.profile.photos.large вернет false, то пойдет выполняться следующее условие
// то есть загрузится картинка если нет фотки
