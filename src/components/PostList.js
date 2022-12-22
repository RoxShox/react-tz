import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from './PostItem'

const PostList = ({ posts, title, rem }) => {
	if (!posts.length) {
		return <h1>ПОСТОВ НЕТ</h1>
	}

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			<TransitionGroup>
				{posts.map((post, index) => (
					<CSSTransition key={post.id} timeout={500} classNames="post">
						<PostItem rem={rem} number={index + 1} post={post} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	)
}

export default PostList
