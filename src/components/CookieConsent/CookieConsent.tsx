import React, { useEffect, useState } from 'react'
import { getCookie, setCookie } from '../../utils/cockie'
import { setItem } from '../../utils/localStorage'
import Button from '../Button/Button'
import styles from './CookieConsent.module.scss'

const CookieConsent: React.FC = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		if (!getCookie('cookie_consent')) {
			setVisible(true)
		}
	}, [])

	const accept = () => {
		setCookie('cookie_consent', 'true', { days: 365 })
		setVisible(false)
	}

	if (!visible) return null

	return (
		<div className={styles.cookieConsent}>
			<div className={styles.text}>
				🍪 Мы используем cookie для улучшения работы сайта. Продолжая
				использовать сайт, вы соглашаетесь с нашей политикой конфиденциальности.
			</div>
			<Button
				variant='primary'
				onClick={() => {
					accept()
					setItem('cookie_consent', true)
				}}
			>
				Принять
			</Button>
		</div>
	)
}

export default CookieConsent
