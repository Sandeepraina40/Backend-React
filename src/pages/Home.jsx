import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../store/postsSlice'
import PostCard from '../shared/PostCard'

export default function Home() {
	const dispatch = useDispatch()
	const { items, status, error } = useSelector((s) => s.posts)

	useEffect(() => {
		if (status === 'idle') dispatch(fetchPosts())
	}, [status, dispatch])

	return (
		<div className="grid-shell">
			{status === 'loading' && (
				<div className="state-info">Loading posts...</div>
			)}
			{status === 'failed' && (
				<div className="state-info error">{error}</div>
			)}
			{status === 'succeeded' && (
				<div className="posts-grid">
					{items.map((post) => (
						<PostCard key={post.id} post={post} />
					))}
				</div>
			)}
		</div>
	)
}


