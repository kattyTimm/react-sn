import React from 'react';
import {Field, reduxForm} from 'redux-form';


import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addDialog, createDialog} from'../../dialogsReducer';

import {Textarea} from '../Common/FormsControls/FormControls';
import {requiredFields, maxLengthCreators} from '../../utilities/validators/validators';

const maxLength100 = maxLengthCreators(100);

const MessageForm = (props) => {
      return <form onSubmit={props.handleSubmit}>
                   <div> <Field name={"message"} component={Textarea} value={props.value} validate={[requiredFields, maxLength100]}/></div>
				    <button>send message</button>
             </form>
}

const MessageReduxForm = reduxForm({form: 'dialogs'})(MessageForm);

const Dialogs = (props) => {	
	
    let state = props.dialogs;

	let dialogsItems = state.dialogsData.map((item, i) => <DialogItem key={i} name={item.name} id={item.id} />);
	let messages = state.messagesData.map((item, i) => <Message key={i} message={item.message} id={item.id} />);

  //  if(!props.isAuth) return <Redirect to={"/login"} />;

  const addNewMessage = (data) => {
  	console.log(data);
  	props.addMessage(data.message);
  }
     
	return (
         <div className={s.dialogs}>
	     
			 <div className={s.dialogs_item}>					  
				   {dialogsItems}
			 </div>
			 
			 <div className={s.messages}> 
				  {messages}
			 </div>
	     <div>
		       <MessageReduxForm onSubmit={addNewMessage} value={props.dialogs.areaVal}/> 
		 </div> 
	  </div>
	)
}

export default Dialogs;