import React from 'react';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setIsFetchingAC, toggleFollowingProgressAC} 
from '../../UsersReducer';
import Users from './Users';
import {userAPI} from '../../api/api.js';
import Preloader from '../Common/Preloader/preloader';
import * as axios from 'axios';
import s from './Users.module.css';    /*  {this.props.isFetching ? <img src={preloader}/> : null}*/


class UsersContainer extends React.Component{

componentDidMount(){
   this.props.toggleFetching(true); // пока ждем ответ isFetching тру

   userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(resp => {
      this.props.toggleFetching(false); // когдв ответ получен isFetching false

      this.props.setUsers(resp.items)
      this.props.setTotalUsersCount(resp.totalCount);
    });
}

onPageChechged = (numPage) => { // стрелочная функция чтобы  сохранить контекст вызова
	this.props.toggleFetching(true); // пока ждем ответ isFetching тру
  this.props.setCurrentPage(numPage);

  userAPI.getUsers(numPage, this.props.pageSize)
    .then(resp => {
     this.props.toggleFetching(false); // когдв ответ получен isFetching false

      this.props.setUsers(resp.items);
    });
}

  render(){
    return  <>
               {this.props.isFetching ? <Preloader /> : null}

               <Users onPageChechged={this.onPageChechged} totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                    users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}
                    isFetching={this.props.isFetching} followingInProgress={this.props.followingInProgress}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                   />
            </>
  }
}



let mapStateToProps = (state) => { // Это  пропсы для функциональной компоненты
  return  {
         users: state.settingParam.users,
         pageSize: state.settingParam.pageSize, // количество страниц
         totalUsersCount: state.settingParam.totalUsersCount, // общее количество пользователей
         currentPage: state.settingParam.currentPage,
         isFetching: state.settingParam.isFetching,
         followingInProgress: state.settingParam.followingInProgress
  }
}

/*let mapDispatchToProps = (dispatch) => {
         return {
                 follow: (id) => { dispatch(followAC(id))},
                 unfollow: (id)=> { dispatch(unfollowAC(id))},
                 setUsers: (users) => {dispatch(setUsersAC(users))},
                 setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
                 setTotalUsersCount: (count) => {dispatch(setTotalUsersCountAC(count))},
                 toggleFetching : (isFetching) => {dispatch(setIsFetchingAC(isFetching))}
                }
}; */


// все эти пропсы для UsersContainer !!!, connect самих в нее засунет:

export default connect(mapStateToProps, { // это функции для контейнерной компоненты
        follow: followAC,
        unfollow: unfollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setTotalUsersCountAC,
        toggleFetching : setIsFetchingAC,
       // FollowingProgress: toggleFollowingProgressAC,
        toggleFollowingProgress: toggleFollowingProgressAC
       })(UsersContainer);

// connect автоматически создает колбэк функцию
// UsersContainer автоматически оборачивается connect, т соответсвенно connect передает ей параметры