import Header from './components/Header/Header'
import AppRoutes from './routes/AppRoutes'
import styles from './App.module.scss'
function App() {
	return (
		<>
			<div className={styles.app}>
				<Header />
				<div className={styles.content}>
				<AppRoutes />
				</div>
			</div>
		</>
	)
}

export default App
