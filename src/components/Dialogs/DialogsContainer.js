import React from 'react';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addDialog, createDialog} from'../../dialogsReducer';


const DialogsContainer = (props) => {	

	let state = props.store.getState();
		
	let addNewPost = () => {
	   props.store.dispatch(addDialog()); // addDialog() - определит тип для акшна
	}
	
    let changeOnKeyPressMessage = (text) => {   	
    	props.store.dispatch(createDialog(text));
    }

	return (
            <Dialogs upDateNewMessageBody={changeOnKeyPressMessage} addMessage={addNewPost} dialogs={state.dialogs}/>
	)
}

export default DialogsContainer;