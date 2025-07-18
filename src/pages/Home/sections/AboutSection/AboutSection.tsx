import React from 'react'
import Button from '../../../../components/Button/Button'

const AboutSection: React.FC = () => {
	return (
		<section className='py-[100px] px-5 text-center'>
			<div className='max-w-[1200px] mx-auto'>
				<h2 className='text-[2.8rem] text-[#2f6b3a] font-bold mb-6'>
					О <span className='text-[#6baf76]'>Ummah Connect</span>
				</h2>
				<p className='text-[1.2rem] text-[#444] max-w-[800px] mx-auto mb-[60px] leading-relaxed'>
					Ummah Connect — это духовная и образовательная платформа, созданная
					для объединения мусульман по всему миру. Мы помогаем вам получать
					знания, укреплять веру и ощущать себя частью единой Уммы.
				</p>

				<div className='flex flex-wrap justify-center gap-8'>
					{/* Feature 1 */}
					<div className='bg-white rounded-2xl p-6 w-[300px] shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1.5 mb-6'>
						<div className='text-[2.4rem] text-[#6baf76] mb-4'>📚</div>
						<h3 className='text-[1.4rem] text-[#2f6b3a] font-semibold mb-3'>
							Достоверные знания
						</h3>
						<p className='text-base text-[#555] leading-relaxed'>
							Изучайте Коран, хадисы и исламские принципы из надежных
							источников.
						</p>
					</div>

					{/* Feature 2 */}
					<div className='bg-white rounded-2xl p-6 w-[300px] shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1.5 mb-6'>
						<div className='text-[2.4rem] text-[#6baf76] mb-4'>🕌</div>
						<h3 className='text-[1.4rem] text-[#2f6b3a] font-semibold mb-3'>
							Общение и братство
						</h3>
						<p className='text-base text-[#555] leading-relaxed'>
							Задавайте вопросы, делитесь опытом и развивайтесь вместе с
							единоверцами.
						</p>
					</div>

					{/* Feature 3 */}
					<div className='bg-white rounded-2xl p-6 w-[300px] shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1.5 mb-6'>
						<div className='text-[2.4rem] text-[#6baf76] mb-4'>🌙</div>
						<h3 className='text-[1.4rem] text-[#2f6b3a] font-semibold mb-3'>
							Вера и цель
						</h3>
						<p className='text-base text-[#555] leading-relaxed'>
							Укрепляйте иман и оставайтесь мотивированными на пути Ислама.
						</p>
					</div>
				</div>

				<Button to='/about' variant='outline' className='mt-8'>
					Подробнее о нас
				</Button>
			</div>
		</section>
	)
}

export default AboutSection
