import axios from 'axios'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Button from '../../../../components/Button/Button'
import { sendLocalNotification } from '../../../../utils/notification'
import styles from './PrayerTimesSection.module.scss'

type PrayerTimes = {
	Fajr: string
	Dhuhr: string
	Asr: string
	Maghrib: string
	Isha: string
	[key: string]: string
}

const PRAYER_ORDER = [
	{ key: 'Fajr', label: 'Фаджр' },
	{ key: 'Dhuhr', label: 'Зухр' },
	{ key: 'Asr', label: 'Аср' },
	{ key: 'Maghrib', label: 'Магриб' },
	{ key: 'Isha', label: 'Иша' },
]

function getTimeDiffString(target: Date) {
	const now = new Date()
	let diff = Math.floor((target.getTime() - now.getTime()) / 1000)
	if (diff < 0) diff = 0
	const h = Math.floor(diff / 3600)
		.toString()
		.padStart(2, '0')
	const m = Math.floor((diff % 3600) / 60)
		.toString()
		.padStart(2, '0')
	const s = (diff % 60).toString().padStart(2, '0')
	return `${h}:${m}:${s}`
}

const PrayerTimesSection: React.FC = () => {
	const [city, setCity] = useState<string>('')
	const [times, setTimes] = useState<PrayerTimes | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string>('')
	const [nextPrayer, setNextPrayer] = useState<{
		name: string
		time: string
		key: string
	} | null>(null)
	const [timeLeft, setTimeLeft] = useState('')
	const wasNotifiedRef = useRef(false)

	const loadData = useCallback(async () => {
		setLoading(true)
		setError('')
		try {
			const locRes = await axios.get('https://ipwho.is/')
			const loc = locRes.data
			if (!loc.success) throw new Error('Не удалось определить местоположение')
			setCity(loc.city)
			if (loc.latitude === undefined || loc.longitude === undefined)
				throw new Error('Координаты не определены')
			const timesRes = await axios.get(
				`https://api.aladhan.com/v1/timings?latitude=${loc.latitude}&longitude=${loc.longitude}&method=2`
			)
			setTimes(timesRes.data.data.timings)
		} catch (e) {
			console.error('Ошибка при получении времени намаза:', e)
			setError('Не удалось определить время намаза 😔')
		}
		setLoading(false)
	}, [])

	useEffect(() => {
		loadData()
	}, [loadData])

	// Таймер до следующего намаза
	useEffect(() => {
		if (!times) return

		function update() {
			if (!times) return
			const now = new Date()
			let next = null
			for (let i = 0; i < PRAYER_ORDER.length; i++) {
				const t = times[PRAYER_ORDER[i].key]
				const [h, m] = t.split(':').map(Number)
				const prayerDate = new Date(now)
				prayerDate.setHours(h, m, 0, 0)
				if (prayerDate > now) {
					next = {
						name: PRAYER_ORDER[i].label,
						key: PRAYER_ORDER[i].key,
						date: prayerDate,
					}
					break
				}
			}
			if (!next) {
				const [h, m] = times.Fajr.split(':').map(Number)
				const nextDate = new Date(now)
				nextDate.setDate(now.getDate() + 1)
				nextDate.setHours(h, m, 0, 0)
				next = { name: 'Фаджр', key: 'Fajr', date: nextDate }
			}
			setNextPrayer({
				name: next.name,
				time: next.date.toTimeString().slice(0, 5),
				key: next.key,
			})
			const timeLeftLocal = getTimeDiffString(next.date)
			setTimeLeft(timeLeftLocal)

			function timeStringToSeconds(str: string) {
				const [h, m, s] = str.split(':').map(Number)
				return h * 3600 + m * 60 + s
			}
			if (timeStringToSeconds(timeLeftLocal) <= 600) {
				if (!wasNotifiedRef.current) {
					sendLocalNotification(next.name, `Скоро начнётся намаз: ${next.name}`)
					wasNotifiedRef.current = true
				}
			} else if (timeStringToSeconds(timeLeftLocal) === 0) {
				sendLocalNotification(next.name, `Намаз ${next.name} начался`)
				console.log('notification sendet working')
			} else {
				wasNotifiedRef.current = false
			}
		}
		update()
		const interval = setInterval(update, 1000)
		return () => clearInterval(interval)
	}, [times])

	return (
		<section className={styles.prayerTimes}>
			<h2>🕋 Время намаза</h2>
			{loading && <div className={styles.loader}>Загрузка...</div>}
			{error && <div className={styles.error}>{error}</div>}
			{times && (
				<div>
					<div className={styles.city}>
						Ваш город: <b>{city}</b>
					</div>
					<Button variant='secondary' onClick={loadData} disabled={loading}>
						🔄 Обновить
					</Button>
					<div className={styles.timesGrid}>
						{PRAYER_ORDER.map(prayer => (
							<div
								key={prayer.key}
								className={nextPrayer?.key === prayer.key ? styles.active : ''}
							>
								<span>{prayer.label}</span>
								<b>{times[prayer.key]}</b>
							</div>
						))}
					</div>
					{nextPrayer && (
						<div className={styles.nextPrayer}>
							<span>
								Следующий намаз: <b>{nextPrayer.name}</b> в {nextPrayer.time}
							</span>
							<br />
							<span>
								До намаза осталось: <b>{timeLeft}</b>
							</span>
						</div>
					)}
				</div>
			)}
		</section>
	)
}

export default PrayerTimesSection
