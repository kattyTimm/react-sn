import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {compose} from 'redux';

import {addDialog} from'../../dialogsReducer';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
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
             addMessage: (text) => dispatch(addDialog(text))
	}
};

//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponent);



export default compose(
 	connect(mapStateToProps, mapDispatchToProps),
     WithAuthRedirect,
 	)(Dialogs);;