import React from 'react'; // react импортируется из самого node moduls
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import MusicContainer from './components/Music/MusicContainer';
import UsersContainer from './components/Users/UsersContainer';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return (
  <BrowserRouter>
	 <div className="wrapper"> 
         <Header />
		 <Navbar />
		 <div className="content">
			   <Route path = '/dialogs' render={() => <DialogsContainer store={props.store} /> }/>
			   <Route path = '/profile' render={() => <Profile store={props.store} />} />
			   <Route path = '/news' render ={() => <NewsContainer  store={props.store} /> } />
			   <Route path='/music' render = {() => <MusicContainer store={props.store} />} />
			   <Route path='/users' render = {() => <UsersContainer store={props.store} />} />
		 </div>
		 <Footer />		   
	 </div>
	</BrowserRouter> 
  );
}

export default App;

//state={props.state.profile} dispatch={props.dispatch}
//<Dialogs dialogs={props.data.dialogs} dispatch={props.dispatch} /> }/>