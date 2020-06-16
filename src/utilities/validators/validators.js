import React from 'react'; // react импортируется из самого node moduls


export const requiredFields = (value) => { 
    if(value){
    	return undefined;
    }else{
    	return "Field is required";
    }
}

export const maxLengthCreators = maxLength => value => {
     if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
     return undefined;
}

