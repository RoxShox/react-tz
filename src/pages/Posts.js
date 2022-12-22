import React, { useState, useEffect } from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import MyButton from '../components/Ui/button/MyButton'
import { usePosts } from '../hooks/usePosts'
import '../styles/App.css'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/Ui/MyModal/MyModal'

function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	// const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
	// 	const response = await PostService.getAll(limit, page)
	// 	setPosts(response.data)
	// 	const totalCount = response.headers['x-total-count']
	// 	setTotalPages(getPageCount(totalCount, limit))
	// })

	// useEffect(() => {
	// 	fetchPosts()
	// }, [])

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className="App">
			<MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
				Создать пост
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: '15px' }} />
			<PostFilter filter={filter} setFilter={setFilter} />

			<PostList rem={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
		</div>
	)
}

export default Posts
