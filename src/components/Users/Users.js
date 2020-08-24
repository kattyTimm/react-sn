import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Users.module.css'; 

import Pagination from '../Common/Pagination/Pagination';

let Users = ({onPageChechged, totalUsersCount, pageSize, currentPage, ...props}) => {

return  <div>

          <Pagination onPageChechged={onPageChechged} 
                      totalUsersCount={totalUsersCount}
                      pageSize={pageSize}
                      currentPage={currentPage}
          />
         {
           props.users.map(obj =>  {
             return <div key={obj.id}>
                        <span>
                                <NavLink to={'/profile/' + obj.id}>
                                     <img src={obj.photos.small !== null ? 
                                      obj.photos.small 
                                      : "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg"} />
                                </NavLink>
                        </span>

                        <span>
                           {obj.followed ?
                                  <button disabled={props.followingInProgress.some(id => id == obj.id)} 
                                  onClick={() => {props.unfollow(obj.id)} 
                           }>
                                       UnFollow
                               </button>

                          :  <button disabled={props.followingInProgress.some(id => id == obj.id)} 
                                     onClick={() => {props.follow(obj.id)} }>
                                       Follow
                            </button>
                          }

                        </span>

                        <span>
                           <span>{obj.name}</span>
                           <span> {'obj.lacation.city'} , {'obj.lacation.country'} </span>
                        </span>
                 </div>
            })
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