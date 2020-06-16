import React from 'react';
import {Field, reduxForm} from 'redux-form'; 

import classes from './MyPosts.module.css';
import Post from './Post/Post'
import {requiredFields, maxLengthCreators} from './../../../utilities/validators/validators';
import {Textarea} from '../../Common/FormsControls/FormControls';
//import {addPostActionCreator, addNewPostActionCreator} from '../../../ProfileReducer';

const maxLength15 = maxLengthCreators(15);

const PostForm = (props) => {
     return <form onSubmit={props.handleSubmit}>
                  <div><Field component={Textarea} name={"post"} validate={[requiredFields, maxLength15]}/></div>
                  <button>send letter</button>
            </form>
}

const ResultPostForm = reduxForm({
	form: 'post'
})(PostForm);


const MyPosts = (props) => {
     
	let postsElement = props.posts.map( p => <Post message={p.message} id={p.id} likesCount={p.likesCount} />) 

/*
    let BtnClick = () => {
		props.addNewPost(); 
	} 
	
	let postOnchange = () => {
		let val = newPost.current.value;
		props.updateNewPost(val);

	}
*/
	const onSubmit = (data) => {
      	console.log(data);
		props.addNewPost(data.post); 
      }

      console.log(maxLengthCreators())
	 
	return <div className="MyPosts">
          	     <ResultPostForm  onSubmit={onSubmit} />
			      {postsElement}	
			</div>	
	}

export default MyPosts;

/*
<textarea ref={newPost} value={props.newPostText} onChange={postOnchange}/>
		     <div>
			     <button onClick={BtnClick}>add post</button>
			 </div>
*/