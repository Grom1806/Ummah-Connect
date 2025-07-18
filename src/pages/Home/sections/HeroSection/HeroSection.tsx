import React from 'react'
import Ilustartion from '../../../../assets/images/11703454-Photoroom.png'
import Button from '../../../../components/Button/Button'

const HeroSection: React.FC = () => {
	return (
		<section className='flex flex-wrap items-center justify-between gap-10 rounded-2xl'>
			<div className='max-w-[600px]'>
				<h1 className='text-[3rem] text-[#2f6b3a] font-bold mb-5'>
					<span
						dir='rtl'
						lang='ar'
						className='text-[#6baf76] font-normal text-[5.5rem] font-[Lateef] ml-[100px] block text-left'
					>
						ٱلسَّلَامُ عَلَيْكُمْ
					</span>
					Добро пожаловать в{' '}
					<span className='text-[#6baf76]'>Ummah Connect</span>
				</h1>
				<p className='text-[1.2rem] text-[#555] mb-8'>
					Вместе мы учимся, растём и объединяемся как одна Умма.
				</p>
				<Button>Присоединиться</Button>
			</div>
			<div className='w-full sm:w-auto mt-10 sm:mt-0'>
				<img
					src={Ilustartion}
					alt='Иллюстрация Ummah'
					className='max-w-[500px] w-full rounded-xl mx-auto'
				/>
			</div>
		</section>
	)
}

export default HeroSection
