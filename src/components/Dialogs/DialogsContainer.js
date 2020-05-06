import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {compose} from 'redux';

import {addDialog, createDialog} from'../../dialogsReducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

/*
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
*/

 

//let RedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
	return {
        dialogs: state.dialogs
	}
};

let mapDispatchToProps = (dispatch)=> {
	return {
             upDateNewMessageBody: (text) => dispatch(createDialog(text)),
             addMessage: () => dispatch(addDialog())
	}
};

//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponent);



export default compose(
 	connect(mapStateToProps, mapDispatchToProps),
     withAuthRedirect,
 	)(Dialogs);;