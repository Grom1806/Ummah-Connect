import React from 'react'
import styles from './Home.module.scss'
import HeroSection from './sections/HeroSection/HeroSection'
import AboutSection from './sections/AboutSection/AboutSection'

const Home: React.FC = () => {
	return (
		<>
			<div className={styles.home}>
				<div className='home-content'>
					<HeroSection />
					<AboutSection />
				</div>
			</div>
		</>
	)
}

export default Home
