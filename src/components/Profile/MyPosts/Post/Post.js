import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
	
	console.log(props.message)

	return <div className="MyPosts">
			<div className={styles.item}>
				     {props.message}
					<button>add posr</button>
					<button>remove post</button>
					<img src="https://im0-tub-ru.yandex.net/i?id=44675ac9a817fef8da7d097ec3c25273&n=13" className={styles.ava} />
					<span>like - {props.likeCounter}</span>
			   </div>
			</div>	
}

export default Post;