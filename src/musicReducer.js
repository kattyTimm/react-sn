import React from 'react';


const SEARCH =  'SEARCH';
const FIND_SONG =  'FIND-SONG';

export const musicReducer = (state, action) => {	
        
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



