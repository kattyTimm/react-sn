import React from 'react';
import s from './News.module.css';

const News = (props) => {
	
	let friendsList = props.news.friends.map((item, i) => <div key={i}>  <p id={item.id}> {item.name} </p> </div>);
	let ref = React.createRef();

	let addingPost = () => {
		let text = ref.current.value;
		props.dispatch({type: 'ADD-HEADLINE'});
	}
	
let areaHandler = () => {
	let value = ref.current.value;
	props.dispatch({type: 'CHANGE_TEXTAREA', text: value});
}

	return (
	  <div>
	    <p> my news  </p>
		{friendsList}
		<div>
		   <textarea ref={ref} onChange={areaHandler} value={props.news.newValue}/>
		   <button onClick={addingPost}>add news post</button>
		</div>
	  </div>
	)
}

export default News;