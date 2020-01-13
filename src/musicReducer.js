import React from 'react';


const SEARCH =  'SEARCH';
const FIND_SONG =  'FIND-SONG';

let initialState = {
	music: [
			{track: 1},
			{track: 2},
			{track: 3}
		], newVal: ''
}; 

export const musicReducer = (state = initialState, action) => {	
        
  switch(action.type){
  	case SEARCH:
  		           state.newVal = action.value;
				 	return state;

	case FIND_SONG:
		state.music.push({track: state.newVal});
		state.newVal ='';	
		return state;	
	default: 
	    return state;		 	
  	
  }
}



