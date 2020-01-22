import React from 'react';
import  News from './News';
import {addNewsActionCreator, addNewOnChangeActionCreator} from '../../NewsReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return{
		friends: state.sidebar.friends,
		newValue : state.sidebar.newValue
	}
};

let mapDispatchToProps = (dispatch) => {

	return {
		updateOnChangeNews: (val) => dispatch(addNewOnChangeActionCreator(val)),
		addOnClickNews: () => dispatch(addNewsActionCreator())
	}
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
export default NewsContainer;