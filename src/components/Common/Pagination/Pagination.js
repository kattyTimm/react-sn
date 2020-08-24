import React from 'react';
import s from './Pagination.module.css';


let Pagination = ({onPageChechged, totalUsersCount, pageSize, currentPage, ...props}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 0; i < pagesCount; i++) {
      pages.push(i+1);
  }


  let pagesPagination = pages.map(num => {
     return <span className={currentPage === num ? s.selectedPage : ''}
                     onClick={(e) => {onPageChechged(num)}} key={num}>
                   {num}
             </span>
  });

return  (
           <div>
                  {pagesPagination}

           </div>
        )  
     
}

export default Pagination;
