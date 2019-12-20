import React from 'react'; // react импортируется из самого node moduls
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return (
  <BrowserRouter>
	 <div className="wrapper"> 
         <Header />
		 <Navbar />
		 <div className="content">
			   <Route path = '/dialogs' render={() => <Dialogs dialogs={props.data.dialogs}/> }/>
			   <Route path = '/profile' render={() => <Profile state={props.data.profile} postHandler={props.dispatch} />} />
			   <Route path = '/news' render ={() => <News  news={props.data.sidebar}/> } />
			   <Route path='/music' render = {() => <Music  list={props.data.musicList}/>} />
			   <Route path='/settings' render = {() => <Settings sett={props.data.settingParam} />} />
		 </div>
		 <Footer />		   
	 </div>
	</BrowserRouter> 
  );
}

export default App;

