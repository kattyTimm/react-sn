import React from 'react';

import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addDialog, createDialog} from'../../dialogsReducer';


const Dialogs = (props) => {	
	
    let state = props.dialogs;

	let dialogsItems = state.dialogsData.map((item, i) => <DialogItem key={i} name={item.name} id={item.id} />);
	let messages = state.messagesData.map((item, i) => <Message key={i} message={item.message} id={item.id} />);
	
	let refElem = React.createRef();
	
	let clickHandler = () => {
	   props.addMessage();
	}
	
    let changeHandler = (e) => {
    	let text = e.target.value; 
    	props.upDateNewMessageBody(text);
    	//props.dispatch(createDialog(text));
    }

  //  if(!props.isAuth) return <Redirect to={"/login"} />;
     
	return (
         <div className={s.dialogs}>
	     
			 <div className={s.dialogs_item}>					  
				   {dialogsItems}
			 </div>
			 
			 <div className={s.messages}> 
				  {messages}
			 </div>
	     <div>
		        <textarea ref={refElem} value={props.dialogs.areaVal} onChange={changeHandler} />
				<button onClick={clickHandler}>send message</button>
		 </div> 
	  </div>
	)
}

export default Dialogs;