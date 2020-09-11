import React, {useState} from 'react';
import {reduxForm} from 'redux-form';

import classes from './ProfileInfo.module.css';
import {CreateField, Input, Textarea} from '../../Common/FormsControls/FormControls';


// Если нэймы филдов совпадают с именами свойст из пропсов, то редакс форм автоматически их сохранитв импутах.
// В форму, созданную редаксФормам нужно передать initialValues равный пропсам:
// <ProfileFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>

const ProfileForm = ({handleSubmit, profile, error}) => {
  //placeholder, component, name, arr, props = {}, text = ""
   return <form onSubmit={handleSubmit}>
             <div>
                 <div>
                 {error &&  <div className={classes.formSumaryError}>
                                     {error}
                                 </div>
                  }

                 </div>

                   <button>save</button>
                   <div>full Name: {CreateField("full name", Input, "fullName", [])}</div>
                   <div>
                        {CreateField(null, Input, "lookingForAJob", [], {type: "checkbox"}, 'looking for a job')}
                   </div>
                   <div>Professionals skills:
                        {CreateField('my professinals skills', Textarea, "lookingForAJobDescription", [])}
                  </div>
                  <div>About me:
                       {CreateField('about me', Textarea, "aboutMe", [])}
                 </div>
                 <div> {Object.keys(profile.contacts).map(c => {
                              return <div key={c} className={classes.contact}> <span>{c}</span> {CreateField(c, Input, "contacts." + c, [])}
                                    </div>
                            })
                        }
                 </div>

             </div>
   </form>
}

const ProfileFormReduxForm = reduxForm({form: 'profileForm'})(ProfileForm);

export default ProfileFormReduxForm;


//          {Object.keys(profile.contacts).map((c, i) => CreateField(profile.contacts.c, 'Input', profile.contacts.c, []))}
// условие {props.profile.photos.large || userPhoto} говорит о том что если props.profile.photos.large вернет false, то пойдет выполняться следующее условие
// то есть загрузится картинка если нет фотки
