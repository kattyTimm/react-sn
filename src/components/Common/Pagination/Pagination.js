import React from 'react';
import s from './Pagination.module.css';
import {useState} from 'react';

let Pagination = ({onPageChechged, totalItemssCount, pageSize, currentPage, sectorSize = 10, ...props}) => {
  let pagesCount = Math.ceil(totalItemssCount / pageSize);

  let pages = [];
  for (let i = 0; i < pagesCount; i++) {
      pages.push(i+1);
  }

// sectorNumber - номер порции на странице
// setSectorNumber - функция, которая этотноме меняет

  let sectorCount = Math.ceil(pagesCount / sectorSize);
  let [sectorNumber, setSectorNumber] = useState(1);
  let leftFrontier = (sectorNumber - 1) * sectorSize + 1;
  let rightFrontier = sectorNumber * sectorSize;

/*

let pagesPagination = pages.map(num => {
   return <span className={currentPage === num ? s.selectedPage : ''}
                   onClick={(e) => {onPageChechged(num)}} key={num}>
                 {num}
           </span>
});
*/



return  <div> { sectorNumber > 1 &&
              <button onClick={ () => {setSectorNumber(sectorNumber - 1)} }>previous</button>}

               {pages.filter(page => page >= leftFrontier && page <= rightFrontier)
                         .map(num => {
                         return <span className={currentPage === num ? s.selectedPage : ''}
                                         onClick={(e) => {onPageChechged(num)}} key={num}>
                                       {num}
                                 </span>
                          })
              }
              { sectorCount > sectorNumber &&
                <button onClick={ () => {setSectorNumber(sectorNumber + 1)} }>next</button>}
           </div>

}

export default Pagination;
