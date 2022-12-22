import React, { useEffect, useState } from 'react'

const PostItem = props => {
	const [timer, setTimer] = useState(props.post.timer)

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(prev => (prev > 0 ? prev - 1 : prev))
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		if (timer === 0) {
			props.rem(props.post)
		}
	}, [timer])
	return (
		<div className="post">
			<div className="post__content">
				<strong>
					{props.number}. {props.post.title}
				</strong>
				<div>{props.post.body}</div>
			</div>
			<div className="post__btns">
				<div>{timer}</div>
				{/* <MyButton onClick={() => props.rem(props.post)}>УДАЛИТЬ</MyButton> */}
			</div>
		</div>
	)
}

export default PostItem
