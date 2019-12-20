import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {
	console.log(props)
          	
	let postsElement = props.posts.map( p => <Post message={p.message} id={p.id} likesCount={p.likesCount} />)
	
     let newPost = React.createRef(); 

    let BtnClick = () => {
		props.addPost();
		//props.addNewPost('');  // очищаю текстареа, но надо чтобы текстареа очищащалась в сьейт
	} 
	
	let postOnchange = () => {
		let val = newPost.current.value;
		props.addNewPost(val);
	}
	  console.log()
	return <div className="MyPosts">
          	<textarea ref={newPost} value={props.value} onChange={postOnchange}/>
		     <div>
			     <button onClick={BtnClick}>add post</button>
			 </div>
			     {postsElement}	
			</div>	
}

export default MyPosts;