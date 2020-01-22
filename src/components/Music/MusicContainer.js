import React from 'react';
import Music from './Music';
import {connect} from 'react-redux';
import {addOnClickMusic, findOnChangeSong} from '../../musicReducer';


let mapStateToProps = (state) => {
	return  {
		music: state.musicList.music,
        newVal: state.musicList.newVal
	}
}

let mapDispatchToProps = (dispatch) => {
         return {
         	       findOnChangeUpdate: (value) =>  dispatch(findOnChangeSong(value)),
                   addOnClick: () => dispatch(addOnClickMusic())
                }	
};

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);
export default MusicContainer;