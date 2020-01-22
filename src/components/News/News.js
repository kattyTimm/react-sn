import React from 'react';
import s from './News.module.css';

const News = (props) => {
	
	let friendsList = props.friends.map((item, i) => <div key={i}>  <p id={item.id}> {item.name} </p> </div>);
	let ref = React.createRef();

	let addingPost = () => {
		let text = ref.current.value;
		props.addOnClickNews();
	}
	
let areaHandler = () => {
	let value = ref.current.value;
	props.updateOnChangeNews(value);
}

	return (
	  <div>
	    <p> my news  </p>
		{friendsList}
		<div>
		   <textarea ref={ref} onChange={areaHandler} value={props.newValue}/>
		   <button onClick={addingPost}>add news post</button>
		</div>
	  </div>
	)
}

export default News;