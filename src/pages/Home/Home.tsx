import React from 'react'
import HeroSection from './sections/HeroSection'
import styles from './Home.module.scss'

const Home: React.FC = () => {
	return (
		<>
			<div className={styles.home}>
				<div className='home-content'>
					<HeroSection />
				</div>
			</div>
		</>
	)
}

export default Home
