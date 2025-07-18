import axios from 'axios'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { FaClock } from 'react-icons/fa'

const PrayerTimes: React.FC = () => {
	const [prayerTimes, setPrayerTimes] = useState({
		Fajr: '',
		Dhuhr: '',
		Asr: '',
		Maghrib: '',
		Isha: '',
	})
	const [timer, setTimer] = useState('')

	// Функция для вычисления следующей молитвы и времени до неё
	function getNextPrayer(prayerTimes: Record<string, string>) {
		const now = dayjs()
		const today = dayjs().format('YYYY-MM-DD')
		const times = Object.entries(prayerTimes)
			.map(([prayer, time]) => ({
				prayer,
				time: dayjs(`${today} ${time}`, 'YYYY-MM-DD HH:mm'),
			}))
			.filter(({ time }) => time.isValid())
			.sort((a, b) => a.time.valueOf() - b.time.valueOf())

		const next = times.find(({ time }) => time.isAfter(now))
		// если все прошли, вернуть первую (на завтра)
		return next || times[0]
	}

	// Форматирование времени до следующей молитвы в ЧЧ:ММ:СС
	function formatTime(diff: number) {
		const hours = Math.floor(diff / 3600)
		const minutes = Math.floor((diff % 3600) / 60)
		const seconds = diff % 60
		return [hours, minutes, seconds]
			.map(unit => String(unit).padStart(2, '0'))
			.join(':')
	}

	useEffect(() => {
		axios
			.get(
				'https://api.aladhan.com/v1/timingsByAddress?address=Berlin,Germany&method=2'
			)
			.then(response => {
				const data = response.data.data.timings
				setPrayerTimes({
					Fajr: data.Fajr,
					Dhuhr: data.Dhuhr,
					Asr: data.Asr,
					Maghrib: data.Maghrib,
					Isha: data.Isha,
				})
			})
			.catch(error => {
				console.error('Error fetching prayer times:', error)
			})
	}, [])

	const nextPrayer = getNextPrayer(prayerTimes)
	const [nextPrayerName, nextPrayerTime] = [
		nextPrayer?.prayer,
		nextPrayer?.time,
	]

	// Таймер для обновления времени до следующей молитвы
	useEffect(() => {
		if (!nextPrayerTime) return
		const update = () => {
			const diff = nextPrayerTime.diff(dayjs(), 'second')
			setTimer(formatTime(diff > 0 ? diff : 0))
		}
		update()
		const interval = setInterval(update, 1000)
		return () => clearInterval(interval)
	}, [nextPrayerTime])

	return (
		<>
			<div className='container'>
				<div className='flex flex-col items-center justify-center '>
					<h2 className='text-4xl font-bold mb-4 text-[#2f6b3a]'>Prayer Times</h2>
					<div className='mt-6 m-full'>
						<ul className='list-none max-w-4xl flex justify-center flex-wrap gap-6'>
							{Object.entries(prayerTimes).map(([prayer, time]) => {
								const isActive = nextPrayerName === prayer
								return (
									<li
										key={prayer}
										className={`
															w-56 h-36 p-5 rounded-3xl border
															bg-white shadow-md
															flex flex-col justify-between items-center
															cursor-pointer
															transition-all duration-300 ease-in-out
															hover:shadow-xl hover:scale-[1.07]
															border-green-300
															${isActive ? 'ring-4 ring-green-400 bg-green-50' : ''}
														`}
									>
										<div className='text-center'>
											<span className='block text-green-800 font-semibold text-lg tracking-wide mb-2'>
												{prayer}
											</span>
											<span className='block text-3xl font-extrabold text-[#6baf76]'>
												{time}
											</span>
										</div>
										{isActive && (
											<div className='flex items-center space-x-2 text-green-600 mt-3 font-medium text-sm'>
												<FaClock />
												<span>{timer}</span>
											</div>
										)}
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default PrayerTimes
