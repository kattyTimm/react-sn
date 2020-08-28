import React from 'react'; // react импортируется из самого node moduls
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import MusicContainer from './components/Music/MusicContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {initializeApp} from './appReducer';
import Preloader from './components/Common/Preloader/preloader';

import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';


import store from './reduxStore';

//  store={props.store}
class App extends React.Component {

  componentDidMount(){
         this.props.initializeApp();
	 }

	  render(){
        if(!this.props.initialazed) {return <Preloader />}
        else{
			  return (

				 <div className="wrapper">
			         <HeaderContainer />
					 <Navbar />
					 <div className="content">
						   <Route path = '/dialogs' render={() => <DialogsContainer /> }/>
						   <Route path = '/profile/:userId?'
						          render={() => <ProfileContainer />} />
						   <Route path = '/news' render ={() => <NewsContainer  /> } />
						   <Route path='/music' render = {() => <MusicContainer />} />
						   <Route path='/users' render = {() => <UsersContainer />} />
						   <Route path='/login' render = {() => <Login />} />
					 </div>
					 <Footer />
				 </div>

		   	  );
		}
    }
}

// mapStateToProps - это функция, принимающая state и возвращающая объект
const mapStateToProps = (state) => ({initialazed: state.app.initialazed});

/*
export default compose(withRouter,
  connect (mapStateToProps, {initializeApp})
)(App);
*/

// Из-за оборачивания в connect сбивается роутинг, поээтому нужен  withRouter.
// А compose используется чтобы избежать большую вложенность hoc в hoc и т.д.



let AppContainer = compose(withRouter,
  connect (mapStateToProps, {initializeApp})
)(App);

 let MainApp = (state) => {
	return <BrowserRouter>
      	    <Provider  store={store}>
      		     <AppContainer />
      	  	</Provider>
  	    </BrowserRouter>
}

export default MainApp;
