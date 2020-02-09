import React from 'react';
import s from './Users.module.css'; /*elem.location.city}, {elem.location.country}*/
import * as axios from 'axios';

class Users extends React.Component{

componentDidMount(){

  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
  .then(resp => {

    this.props.setUsers(resp.data.items)
    this.props.setTotalUsersCount(resp.data.totalCount);
    console.log(resp.data.totalCount)
  });
}

onPageChechged = (numPage) => { // стрелочная функция чтобы  сохранить контекст вызова
	console.log(numPage);
  this.props.setCurrentPage(numPage);

  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.pageSize}`)
  .then(resp => {
    this.props.setUsers(resp.data.items);
  /*  this.props.totalUsrsCount(resp.data.totalCount);*/
  });
}

  render(){

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i+1);
    }

let pagesPagination = pages.map(num => {
   return <span className={this.props.currentPage === num ? s.selectedPage : ''} onClick={(e) => {this.onPageChechged(num)}} key={num}>
                 {num}
           </span>
});

  /*

  <span className={s.selectedPage}>2</span>
  <span className>3</span>
  <span className>4</span>
  <span className>5</span>
  */

    return  <div>
             <div>
                  {pagesPagination}
             </div>
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
