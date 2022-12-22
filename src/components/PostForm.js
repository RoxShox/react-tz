import React, { useState } from 'react'
import MyButton from './Ui/button/MyButton'
import MyInput from './Ui/input/MyInput'

const PostForm = ({ create }) => {
	const [post, setPost] = useState({
		title: '',
		body: '',
		timer: Math.floor(Math.random() * (30 - 10 + 1)) + 10,
	})

	const addNewPost = e => {
		e.preventDefault()
		const newPost = {
			...post,
			id: Date.now(),
		}
		create(newPost)
		setPost({ title: '', body: '', timer: Math.floor(Math.random() * (30 - 10 + 1)) + 10 })
	}

	return (
		<form>
			{/* УПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
			<MyInput
				type="text"
				placeholder="Название поста"
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
			/>
			{/*НЕУПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
			<MyInput
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })}
				type="text"
				placeholder="Описание"
			/>
			<MyButton onClick={addNewPost}>Создать пост</MyButton>
		</form>
	)
}

export default PostForm
