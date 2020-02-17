import React from 'react';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setIsFetchingAC} from '../../UsersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/preloader';
import * as axios from 'axios';
import s from './Users.module.css';    /*  {this.props.isFetching ? <img src={preloader}/> : null}*/


class UsersContainer extends React.Component{

componentDidMount(){
   this.props.toggleFetching(true); // пока ждем ответ isFetching тру
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
  .then(resp => {
     this.props.toggleFetching(false); // когдв ответ получен isFetching false

    this.props.setUsers(resp.data.items)
    this.props.setTotalUsersCount(resp.data.totalCount);
    console.log(resp.data.totalCount)
  });
}

onPageChechged = (numPage) => { // стрелочная функция чтобы  сохранить контекст вызова
	this.props.toggleFetching(true); // пока ждем ответ isFetching тру
  this.props.setCurrentPage(numPage);

  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.pageSize}`)
  .then(resp => {
   this.props.toggleFetching(false); // когдв ответ получен isFetching false

    this.props.setUsers(resp.data.items);
  });
}

  render(){
    return  <>
               {this.props.isFetching ? <Preloader /> : null}

               <Users onPageChechged={this.onPageChechged} totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                    users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}
                    isFetching={this.props.isFetching}
                   />
            </>
  }
}



let mapStateToProps = (state) => {
  return  {
         users: state.settingParam.users,
         pageSize: state.settingParam.pageSize, // количество страниц
         totalUsersCount: state.settingParam.totalUsersCount, // общее количество пользователей
         currentPage: state.settingParam.currentPage,
         isFetching: state.settingParam.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
         return {
                 follow: (id) => { dispatch(followAC(id))},
                 unfollow: (id)=> { dispatch(unfollowAC(id))},
                 setUsers: (users) => {dispatch(setUsersAC(users))},
                 setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
                 setTotalUsersCount: (count) => {dispatch(setTotalUsersCountAC(count))},
                 toggleFetching : (isFetching) => {dispatch(setIsFetchingAC(isFetching))}
                }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
