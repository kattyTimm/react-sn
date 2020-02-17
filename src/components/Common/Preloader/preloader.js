import React from 'react';
import preloader from '../../../preloader.svg'; // при перехое на уровень выше ./ можно упустить

let Preloader =  (props) => {
   return  <div>
       <img src={preloader}/> 
   </div>
}


export default Preloader;
