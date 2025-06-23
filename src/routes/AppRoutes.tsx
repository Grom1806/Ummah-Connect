import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<div>О нас</div>} />
			<Route path='/quran' element={<div>Коран</div>} />
			<Route path='/hadith' element={<div>Хадисы</div>} />
			<Route path='/forum' element={<div>Форум</div>} />
			<Route path='/blog' element={<div>Блог</div>} />
			<Route path='*' element={<div>Страница не найдена</div>} />
		</Routes>
	)
}

export default AppRoutes
