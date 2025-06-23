import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Header.module.scss'

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
		<header className={styles.header}>
			<div className={styles.content}>
				<div className='logo'>
					<NavLink to='/' className={styles.logoLink}>
						<h3>Ummah Connect</h3>
					</NavLink>
				</div>
				<nav className={styles.nav}>
					<ul className={styles.navList}>
						{navItems.map((item, index) => (
							<li key={index}>
								<NavLink
									to={item.href}
									className={({ isActive }) =>
										isActive
											? `${styles.navLink} ${styles.active}`
											: styles.navLink
									}
								>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles.join}>
					<Button>Присоединиться</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
