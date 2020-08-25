import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Users.module.css';


let User = ({user, follow, unfollow, followingInProgress, ...props}) => {

             return <div>
                        <span>
                                <NavLink to={'/profile/' + user.id}>
                                     <img src={user.photos.small !== null ?
                                      user.photos.small
                                      : "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg"} />
                                </NavLink>
                        </span>

                        <span>
                           { user.followed ?
                                  <button disabled={followingInProgress.some(id => id == user.id)}
                                  onClick={ () => {unfollow(user.id)} }>
                                       UnFollow
                               </button>

                          :  <button disabled={followingInProgress.some(id => id == user.id)}
                                     onClick={ () => {follow(user.id)} }>
                                       Follow
                            </button>
                          }

                        </span>

                        <span>
                           <span>{user.name}</span>
                           <span> {'user.lacation.city'} , {'user.lacation.country'} </span>
                        </span>
                 </div>

}

export default User;



/*
                            /*  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                              	 withCredentials: true,
                                 headers: {
                        	      	    	'API-KEY' : '43040dd6-0e63-4499-9314-9afff1dbb86e'
                        	      	    }
                              }) */



// в axios.post withCredentials предается 3м параметром!! , а в axios.get и в axios.delete - вторым
