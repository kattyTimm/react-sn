import React from 'react';
import s from './News.module.css';

const News = (props) => {
	
	let friendsList = props.news.friends.map((item, i) => <div key={i}>  <p id={item.id}> {item.name} </p> </div>);
	let post = React.createRef();
	
	let addNew = () => {
		
		let newPost = post.current.value;
		
	    props.func(newPost); // func приходит из стейта, она передается параметром в App
		post.current.value = '';
		console.log(props.func)
	}
	
	return (
	  <div>
	    <p> my news  </p>
		{friendsList}
		<div>
		   <textarea ref={post}></textarea>
		   <button onClick={addNew}>addNew</button>
		</div>
	  </div>
	)
}

export default News;