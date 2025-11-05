import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Detail() {
	const { id } = useParams()
	const { items, status } = useSelector((s) => s.posts)
	const post = useMemo(() => items.find((p) => String(p.id) === String(id)), [items, id])

	if (status === 'loading') {
		return <div className="state-info">Loading post...</div>
	}

	if (!post) {
		return (
			<div className="state-info error">
				Post not found. <Link to="/">Go back</Link>
			</div>
		)
	}

	return (
		<div className="detail">
			<h2 className="detail-title">Details Page For Post With ID ${post.id}</h2>
			<img
				className="detail-image"
				src={`https://picsum.photos/320?random=${post.id}`}
				alt={post.title}
			/>
			<div className="detail-info">
				<p><span className="muted">User Id :</span> {post.userId}</p>
				<p><span className="muted">Title :</span> {post.title}</p>
				<p><span className="muted">Body :</span> {post.body}</p>
			</div>
		</div>
	)
}


