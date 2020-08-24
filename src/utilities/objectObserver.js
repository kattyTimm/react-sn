import React from 'react'; // react импортируется из самого node moduls


export const updateObjectInArr = (items, itemId, propertyName, newObjectProps) => { 
   return items.map( obj => {
                 if(obj[propertyName] === itemId){
	                return {...obj, ...newObjectProps};
                 }
                 return obj;
    });
}


