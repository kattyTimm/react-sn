import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addDialog, createDialog} from'../../dialogsReducer';


const Dialogs = (props) => {	
	
	let dialogsItems = props.dialogs.dialogsData.map((item, i) => <DialogItem key={i} name={item.name} id={item.id} />);
	let messages = props.dialogs.messagesData.map((item, i) => <Message key={i} message={item.message} id={item.id} />);
	
	let refElem = React.createRef();
	
	let clickHandler = () => {
	   props.dispatch(addDialog());
	}
	
    let changeHandler = () => {
    	let text = refElem.current.value; 
    	props.dispatch(createDialog(text));
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
		        <textarea ref={refElem} value={props.dialogs.areaVal} onChange={changeHandler} />
				<button onClick={clickHandler}>send message</button>
		 </div> 
	  </div>
	)
}

export default Dialogs;