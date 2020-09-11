import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';

import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileFormReduxForm from './ProfileForm';
import userPhoto from '../../../img/user_photo.jpg';

const ProfileInfo = ({saveProfile, ...props}) => {
  let [editMode, setEditMode] = useState(props.status);

  if(!props.profile){
		 return <Preloader />
	}

  const onMainPhotoSelected = (e) => {
     if(e.target.files.length){
         props.savePhoto(e.target.files[0]);
     }
  }

  const onSubmit = (formData) => {
      saveProfile(formData).then(
        () => {
                setEditMode(false)
             }
      )
      //

  }

	return <div className="ProfileInfo">
		         <div>
				        <img src={props.profile.photos.large || userPhoto}  className={classes.mainPhoto}/>
			     </div>

				 <div>
            {editMode ?  <ProfileFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
					            :  <ProfileData profile={props.profile} isOwner={props.isOwner} onMainPhotoSelected={onMainPhotoSelected}
                                      goToEditMode={ () => {setEditMode(true)} }/>
            }
						<ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status} />
				 </div>
			</div>
}

const ProfileData = ({profile, isOwner, onMainPhotoSelected, goToEditMode}) => {
   return <div>

             <div> <p><button onClick={goToEditMode}>edit</button></p>
                   <p>full Name: {profile.fullName}</p>
                   <p>looking for a job: {profile.lookingForAJob ? 'yes' : 'no'} </p>
                   {profile.lookingForAJob &&
                       <p>professionals skills: {profile.lookingForAJobDescription} </p>
                   }
                   <p>about me: </p>
                   {Object.keys(profile.contacts).map(c => <Contacts key={c} contactTitle={c} contactValue={profile.contacts[c]}/>)}
             </div>

             {isOwner && <div>
                            <p><input type="file" onChange={onMainPhotoSelected}/></p>
                         </div>
             }
   </div>
}



const Contacts = ({contactTitle, contactValue, ...props}) => {
  return <div>
              {contactTitle}: {contactValue}
         </div>
}

export default ProfileInfo;

/*


*/


// условие {props.profile.photos.large || userPhoto} говорит о том что если props.profile.photos.large вернет false, то пойдет выполняться следующее условие
// то есть загрузится картинка если нет фотки
