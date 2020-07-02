import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, 
         setTotalUsersCountAC, setIsFetchingAC, 
         toggleFollowingProgressAC,  getUsersThunkCreateor,
          unfollowThunk, followThunk} from '../../UsersReducer';
import Users from './Users';
import {userAPI} from '../../api/api.js';
import Preloader from '../Common/Preloader/preloader';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, 
  getFollowingInProgress} from './users-selectors';


class UsersContainer extends React.Component{

    componentDidMount(){
    debugger;
       this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChechged = (numPage) => { // стрелочная функция чтобы  сохранить контекст вызова

        this.props.getUsersThunk(numPage, this.props.pageSize);

    }

  render(){

    return  (<div>
              <div> {this.props.isFetching ? <Preloader /> : null} </div>

               <Users onPageChechged={this.onPageChechged} totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                    users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}
                    isFetching={this.props.isFetching} followingInProgress={this.props.followingInProgress}
                   
                   />
              </div>     
            )
  }
}


/*
let mapStateToProps = (state) => { // Это  пропсы для функциональной компоненты
  return  {
         users: state.settingParam.users,
         pageSize: state.settingParam.pageSize, // количество страниц
         totalUsersCount: state.settingParam.totalUsersCount, // общее количество пользователей
         currentPage: state.settingParam.currentPage,
         isFetching:  state.settingParam.isFetching,
         followingInProgress: state.settingParam.followingInProgress
  }
}

*/

let mapStateToProps = (state) => { 
  return  {
         users: getUsers(state),
         pageSize: getPageSize(state), // количество страниц
         totalUsersCount: getTotalUsersCount(state), // общее количество пользователей
         currentPage: getCurrentPage(state),
         isFetching: getIsFetching(state),
         followingInProgress: getFollowingInProgress(state)
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
// connect автоматически создает колбэк функцию
// UsersContainer автоматически оборачивается connect, и соответсвенно connect передает ей параметры

export default compose(
        //  WithAuthRedirect,
          connect(mapStateToProps, { 
        setCurrentPage: setCurrentPageAC,
        getUsersThunk: getUsersThunkCreateor, // getUsersThunkCreateor придет из UsersReducer и в UsersContainer уже попадет под именем getUsersThunk
        unfollow: unfollowThunk,
        follow: followThunk})
          )(UsersContainer)

