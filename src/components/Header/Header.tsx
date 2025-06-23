import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import JoinButton from '../JoinButton/JoinButton'

type navItem = {
	label: string
	href: string
}

const navItems: navItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Quran', href: '/quran' },
	{ label: 'Hadith', href: '/hadith' },
	{ label: 'Forum', href: '/forum' },
	{ label: 'Blog', href: '/blog' }
]

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
			<div className="logo">
				<NavLink to="/" className={styles.logoLink}>
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
			<JoinButton buttonText='Join now'/>
			</div>
			</div>
		</header>
	)
}

export default Header
