import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Users.module.css'; /*elem.location.city}, {elem.location.country}*/
import {unfollow} from '../../api/api.js'; 
 import {follow} from '../../api/api.js'; 
// import * as axios from 'axios';

let Users = (props) => {
	console.log(props)

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
                         <NavLink to={'/profile/' + obj.id}>
                             <img src={obj.photos.small !== null ? obj.photos.small : "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg"} />
                         </NavLink>
                      </span>
                      <span>
                      {   obj.followed
                        ?  <button disabled={props.followingInProgress.some(id => id == obj.id)} onClick={() => {    // followingInProgress - это просто свойство из initialSate из редъюсера                   	
                        	props.toggleFollowingProgress(true, obj.id);
/*
                        	      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${obj.id}`, {
                        	      	    withCredentials: true,
                        	      	    headers: {
                        	      	    	'API-KEY' : '43040dd6-0e63-4499-9314-9afff1dbb86e'
                        	      	    }

                        	      	})
*/
                        	      unfollow.delUser(obj.id)
									  .then(data => {
									  	if(data.resultCode == 0){
									         props.unfollow(obj.id);
									      }
									      props.toggleFollowingProgress(false, obj.id); // это функция, она приходит из пропсов из connect, где в toggleFollowingProgress
									                                            /// передан экшн креэйтор, и так же опрокинута в саму Юзерс
									  });
                        }

                        }>UnFollow</button>

                        :  <button disabled={props.followingInProgress.some(id => id == obj.id)} onClick={() => {
                        	props.toggleFollowingProgress(true, obj.id);

                                  follow.followUser(obj.id).then(data => {
									  	  if(data.resultCode == 0){
									         props.follow(obj.id);
									      }
									      props.toggleFollowingProgress(false, obj.id);

									  });
									}
                        }>Follow</button>
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



/*      
                            /*  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${obj.id}`, {}, {
                              	 withCredentials: true,
                                 headers: {
                        	      	    	'API-KEY' : '43040dd6-0e63-4499-9314-9afff1dbb86e'
                        	      	    }     
                              }) */                      
                        


// в axios.post withCredentials предается 3м параметром!! , а в axios.get и в axios.delete - вторым