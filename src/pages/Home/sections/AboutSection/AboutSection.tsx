import React from 'react'
import Button from '../../../../components/Button/Button'
import styles from './AboutSection.module.scss'

const AboutSection: React.FC = () => {
	return (
		<section className={styles.about}>
			<div className={styles.container}>
				<h2 className={styles.title}>
					О <span>Ummah Connect</span>
				</h2>
				<p className={styles.description}>
					Ummah Connect — это духовная и образовательная платформа, созданная
					для объединения мусульман по всему миру. Мы помогаем вам получать
					знания, укреплять веру и ощущать себя частью единой Уммы.
				</p>

				<div className={styles.features}>
					<div className={styles.feature}>
						<div className={styles.icon}>📚</div>
						<h3>Достоверные знания</h3>
						<p>
							Изучайте Коран, хадисы и исламские принципы из надежных
							источников.
						</p>
					</div>

					<div className={styles.feature}>
						<div className={styles.icon}>🕌</div>
						<h3>Общение и братство</h3>
						<p>
							Задавайте вопросы, делитесь опытом и развивайтесь вместе с
							единоверцами.
						</p>
					</div>

					<div className={styles.feature}>
						<div className={styles.icon}>🌙</div>
						<h3>Вера и цель</h3>
						<p>Укрепляйте иман и оставайтесь мотивированными на пути Ислама.</p>
					</div>
				</div>
				<Button to='/about' variant='outline'>
					Подробнее о нас
				</Button>
			</div>
		</section>
	)
}

export default AboutSection
