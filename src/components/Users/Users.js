import React from 'react';
import s from './Users.module.css';

import Pagination from '../Common/Pagination/Pagination';
import User from './User';

let Users = ({onPageChechged, totalUsersCount, pageSize, currentPage, ...props}) => {

return  <div>

          <Pagination onPageChechged={onPageChechged}
                      totalItemssCount={totalUsersCount}
                      pageSize={pageSize}
                      currentPage={currentPage}
          />
         {
           props.users.map(obj =>  <User key={obj.id} user={obj}  follow={props.follow} unfollow={props.unfollow} followingInProgress={props.followingInProgress}/> )
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
