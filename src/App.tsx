import Header from './components/Header/Header'
import AppRoutes from './routes/AppRoutes'

function App() {
	return (
		<>
			<div className='app'>
				<Header />
				<div className='flex flex-col justify-center w-[1440px] mx-auto'>
					<AppRoutes />
				</div>
			</div>
		</>
	)
}

export default App
