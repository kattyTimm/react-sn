import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {	
	
	let dialogsItems = props.dialogs.dialogsData.map((item, i) => <DialogItem key={i} name={item.name} id={item.id} />);
	let messages = props.dialogs.messagesData.map((item, i) => <Message key={i} message={item.message} id={item.id} />);
	
	let refElem = React.createRef();
	let text;
	let clickHandler = () => {
		text = refElem.current.value; 
		console.log(text);
		return <p>{text}</p>
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
		        <textarea ref={refElem}></textarea>
				<button onClick={clickHandler}>send message</button>
		 </div> 
		      {text}
	  </div>
	)
}

export default Dialogs;