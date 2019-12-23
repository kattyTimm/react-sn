import React from 'react';
import s from './Music.module.css';

const Music = (props) => {
	console.log(props);
	let music = props.list.music.map((elem, i) => <div key={i}> {elem.track} </div>);
	
	let refElem = React.createRef();
	
	let btnClickHandler = () => {
		props.dispatch({type: 'FIND-SONG'});
	}
	
    let inputHandler = () => {
		let value = refElem.current.value;
		props.dispatch({type: 'SEARCH', value});
	}
	
	return (
	  <div className="Music">
	         <p className={s.paragraph}> here soon willl be play list </p>
				 {music}
				 <div>
				 <p>лобавить в плейлист</p>
				 <input ref={refElem} onChange={inputHandler} value={props.list.newVal} />
				 <button onClick={btnClickHandler}>добавить трек</button>
				 </div>
	  </div>
	)
}


export default Music;