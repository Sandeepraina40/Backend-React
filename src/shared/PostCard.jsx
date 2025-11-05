import { Link } from 'react-router-dom'

function truncate(text, max) {
	if (!text) return ''
	return text.length > max ? text.slice(0, max).trimEnd() + '...' : text
}

export default function PostCard({ post }) {
	const shortTitle = truncate(post.title, 24)
	const shortBody = truncate(post.body, 86)

	return (
		<Link to={`/item/${post.id}`} className="card">
			<img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} className="card-img" />
			<div className="card-content">
				<p className="muted">User ID: {post.userId}</p>
				<p className="title">Title : {shortTitle}</p>
				<p className="body">
					Body : {shortBody}{post.body.length > 86 ? ' Read More...' : ''}
				</p>
			</div>
		</Link>
	)
}


