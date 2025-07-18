import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

type navItem = {
	label: string
	href: string
	key: string
}

const navItems: navItem[] = [
	{ label: 'Главная', href: '/', key: 'main' },
	{ label: 'О нас', href: '/about', key: 'about' },
	{ label: 'Коран', href: '/quran', key: 'quran' },
	{ label: 'Хадисы', href: '/hadith', key: 'hadith' },
	{ label: 'Форум', href: '/forum', key: 'forum' },
	{ label: 'Блог', href: '/blog', key: 'blog' },
]

const Header: React.FC = () => {
	return (
		<header className='fixed top-0 left-0 right-0 z-1000 flex px-5 py-2 bg-green-800'>
			<div className='flex justify-between items-center w-360 mx-auto text-[#fdf7e8]'>
				<NavLink to='/' className='flex items-center gap-2'>
					<h3 className='m-0 font-[Pacifico] text-[34px] font-medium'>
						Ummah Connect
					</h3>
				</NavLink>
				<nav>
					<ul className='flex gap-5 list-none p-0 m-0'>
						{navItems.map((item, index) => (
							<li key={index} className='inline text-[26px]'>
								<NavLink
									to={item.href}
									className={({ isActive }) =>
										`relative text-inherit no-underline transition-all duration-200 opacity-80
                after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-[#fdf7e8] after:rounded after:scale-x-0 after:transition-transform after:duration-300
                hover:opacity-100 hover:after:scale-x-100
                ${isActive ? 'opacity-100 after:scale-x-100' : ''}`
									}
								>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
				<div>
					<Button>Присоединиться</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
