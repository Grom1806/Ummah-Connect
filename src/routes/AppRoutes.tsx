import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<div>About Page</div>} />
			<Route path="/quran" element={<div>Quran Page</div>} />
			<Route path="/hadith" element={<div>Hadith Page</div>} />
			<Route path="/forum" element={<div>Forum Page</div>} />
			<Route path="/blog" element={<div>Blog Page</div>} />
			<Route path="*" element={<div>404 Not Found</div>} />
		</Routes>
	)
}

export default AppRoutes