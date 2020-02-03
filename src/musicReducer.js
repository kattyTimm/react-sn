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
  	case SEARCH:{
          return {...state, newVal: action.newVal};
  	}

	case FIND_SONG:{
            return {...state, music: [...state.music, {track: state.newVal}], newVal: ''};
	} 
	
	default: 
	    return state;		 	
  	
  }
}

export const addOnClickMusic = () => ({type: FIND_SONG});

export const findOnChangeSong = (val) => ({type: SEARCH, newVal: val});