import styles from './App.module.scss'
import CookieConsent from './components/CookieConsent/CookieConsent'
import Header from './components/Header/Header'
import AppRoutes from './routes/AppRoutes'

function App() {
	return (
		<>
			<div className={styles.app}>
				<Header />
				<div className={styles.content}>
					<AppRoutes />
				</div>
			</div>
			<CookieConsent />
		</>
	)
}

export default App
