import React from 'react'
import Ilustartion from '../../../assets/images/11703454-Photoroom.png'
import styles from './HeroSection.module.scss'
import JoinButton from '../../../components/JoinButton/JoinButton'

const HeroSection: React.FC = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h1 className={styles.title}>
				<span dir="rtl" lang="ar" className={styles.salam}>ٱلسَّلَامُ عَلَيْكُمْ</span> <br />	Welcome to <span>Ummah Connect</span>
				</h1>
				<p className={styles.subtitle}>
					Together we learn, grow, and unite as one Ummah.
				</p>
				<JoinButton buttonText='Join now'/>
			</div>
			<div className={styles.image}>
				<img src={Ilustartion} alt='Ummah illustration' />
			</div>
		</section>
	)
}

export default HeroSection
