import React from 'react'
import Ilustartion from '../../../../assets/images/11703454-Photoroom.png'
import Button from '../../../../components/Button/Button'
import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h1 className={styles.title}>
					<span dir='rtl' lang='ar' className={styles.salam}>
						ٱلسَّلَامُ عَلَيْكُمْ
					</span>{' '}
					<br /> Добро пожаловать в <span>Ummah Connect</span>
				</h1>
				<p className={styles.subtitle}>
					Вместе мы учимся, растём и объединяемся как одна Умма.
				</p>
				<Button>Присоединиться</Button>
			</div>
			<div className={styles.image}>
				<img src={Ilustartion} alt='Иллюстрация Ummah' />
			</div>
		</section>
	)
}

export default HeroSection
