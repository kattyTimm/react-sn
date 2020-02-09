import React from 'react';
import s from './Users.module.css'; /*elem.location.city}, {elem.location.country}*/
import * as axios from 'axios';

const Users = (props) => {

let getUsers = () => {
   if(props.users.length == 0){
	   	axios.get('https://social-network.samuraijs.com/api/1.0/users')
	   	.then(resp => props.setUsers(resp.data.items));
   	}
}
            

	return  <div>
	         	<button onClick={getUsers}>get Users</button> 
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

class Users extends React.Component{
 /* constructor(){
    super();
  }*/

  render(){
    return  <div>
            <button onClick={getUsers}>get Users</button> 
           {
                this.props.users.map(obj => <div key={obj.id}>
                        <span>
                           <img src={obj.photos.small !== null ? obj.photos.small : "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg"} />
                        </span>
                        <span>
                        {   obj.followed 
                          ?  <button onClick={() => {this.props.unfollow(obj.id)}}>UnFollow</button>
                          :  <button onClick={() => {this.props.follow(obj.id)}}>Follow</button>
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
}

export default Users;

