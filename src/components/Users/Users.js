import React from 'react';
import s from './Users.module.css'; /*elem.location.city}, {elem.location.country}*/

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 0; i < pagesCount; i++) {
      pages.push(i+1);
  }


  let pagesPagination = pages.map(num => {
     return <span className={props.currentPage === num ? s.selectedPage : ''} onClick={(e) => {props.onPageChechged(num)}} key={num}>
                   {num}
             </span>
  });

return  <div>
           <div>
                  {pagesPagination}

           </div>
         {
              props.users.map(obj => <div key={obj.id}>
                      <span>
                         <img src={obj.photos.small !== null ? obj.photos.small : "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg"} />
                      </span>
                      <span>
                      {   obj.followed
                        ?  <button onClick={() => {props.unfollow(obj.id)}}>UnFollow</button>
                        :  <button onClick={() => {props.follow(obj.id)}}>Follow</button>
                      }

                      </span>
                      <span>
                       <span>{obj.name}</span>
                        <span> {'obj.lacation.city'} , {'obj.lacation.country'} </span>
                      </span>
            </div>)
         }
     </div>
}

export default Users;



/*{pages.map(num => {
   return <span className={this.props.currentPage === num ? s.selectedPage : ''} onClick={(e) => {this.onPageChechged(num)}} key={num}>
                 {num}
           </span>}
         )}*/
