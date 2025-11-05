import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

export default function App() {
	return (
		<div className="app-shell">
			<header className="app-header">
				<div className="container">
					<Link to="/" className="brand">Social Media App</Link>
				</div>
			</header>
			<main className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/item/:id" element={<Detail />} />
				</Routes>
			</main>
		</div>
	)
}


