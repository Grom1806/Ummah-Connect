import React from 'react'
import styles from './Home.module.scss'
import AboutSection from './sections/AboutSection/AboutSection'
import HeroSection from './sections/HeroSection/HeroSection'
import PrayerTimesSection from './sections/PrayerTimesSection/PrayerTimesSection'

const Home: React.FC = () => {
	return (
		<>
			<div className={styles.home}>
				<div className='home-content'>
					<HeroSection />
					<AboutSection />
					<PrayerTimesSection />
				</div>
			</div>
		</>
	)
}

export default Home
