import React from 'react'
import AboutSection from './sections/AboutSection/AboutSection'
import HeroSection from './sections/HeroSection/HeroSection'
import PrayerTimes from './sections/PrayerTimes/PrayerTimes'

const Home: React.FC = () => {
	return (
		<>
			<div className='mt-45'>
				<div className='home-content'>
					<HeroSection />
					<AboutSection />
					<PrayerTimes />
				</div>
			</div>
		</>
	)
}

export default Home
