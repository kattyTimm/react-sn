import React, {Suspense} from 'react'; // react импортируется из самого node moduls
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import NewsContainer from './components/News/NewsContainer';
import MusicContainer from './components/Music/MusicContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {initializeApp} from './appReducer';
import Preloader from './components/Common/Preloader/preloader';

import {HashRouter, Route, withRouter} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';

import store from './reduxStore';
import {SuspenseLoading} from './hoc/SuspenseLoading';
//import ProfileContainer from './components/Profile/ProfileContainer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
// ProfileContainer и DialogsContainer не пападет в bundle, они загрузятся по надобности

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer') );
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer') );

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
  						   <Route path = '/dialogs' render={ SuspenseLoading(DialogsContainer) }/>
  						   <Route path = '/profile/:userId?' render={ SuspenseLoading(ProfileContainer) } />
  						   <Route path = '/news' render ={() => <NewsContainer  /> } />
  						   <Route path='/music' render = {() => <MusicContainer />} />
  						   <Route path='/users' render = {() => <UsersContainer />} />
  						   <Route path='/login' render = {() => <Login />} />
                 <Route path='*' render={ () => <div>404 NOT FOUND</div>}/>
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


// Provider глобально создает контекст (здесь это store={store}), поэтому он потом доступен в AppContainer и следовательно во всех компонентах через пропсы
 let MainApp = (state) => {
	return <HashRouter basename={process.env.PUBLIC_URL}>
      	    <Provider  store={store}>
      		     <AppContainer />
      	  	</Provider>
  	    </HashRouter>
}

export default MainApp;
