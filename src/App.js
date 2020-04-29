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
import {BrowserRouter, Route} from 'react-router-dom';


//  store={props.store}
const App = () => { // props
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

export default App;

//state={props.state.profile} dispatch={props.dispatch}
//<Dialogs dialogs={props.data.dialogs} dispatch={props.dispatch} /> }/>
