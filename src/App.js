import React from 'react'; // react импортируется из самого node moduls
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import MusicContainer from './components/Music/MusicContainer';
import UsersContainer from './components/Users/UsersContainer';
import {BrowserRouter, Route} from 'react-router-dom';


//  store={props.store}
const App = () => { // props
  return (

	 <div className="wrapper">
         <Header />
		 <Navbar />
		 <div className="content">
			   <Route path = '/dialogs' render={() => <DialogsContainer /> }/>
			   <Route path = '/profile/:userId?' 
			          render={() => <ProfileContainer />} />
			   <Route path = '/news' render ={() => <NewsContainer  /> } />
			   <Route path='/music' render = {() => <MusicContainer />} />
			   <Route path='/users' render = {() => <UsersContainer />} /> 
		 </div>
		 <Footer />
	 </div>

  );
}

export default App;

//state={props.state.profile} dispatch={props.dispatch}
//<Dialogs dialogs={props.data.dialogs} dispatch={props.dispatch} /> }/>
