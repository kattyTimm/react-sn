import React from 'react';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from '../../UsersReducer';
import Users from './Users';
import * as axios from 'axios';
import s from './Users.module.css';


class UsersContainer extends React.Component{

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
  });
}

  render(){
    return  <Users onPageChechged={this.onPageChechged} totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                   users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}/>
  }
}



let mapStateToProps = (state) => {
  return  {
         users: state.settingParam.users,
         pageSize: state.settingParam.pageSize, // количество страниц
         totalUsersCount: state.settingParam.totalUsersCount, // общее количество пользователей
         currentPage: state.settingParam.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
         return {
                 follow: (id) => { dispatch(followAC(id))},
                 unfollow: (id)=> { dispatch(unfollowAC(id))},
                 setUsers: (users) => {dispatch(setUsersAC(users))},
                 setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
                 setTotalUsersCount: (count) => {dispatch(setTotalUsersCountAC(count))}
                }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
