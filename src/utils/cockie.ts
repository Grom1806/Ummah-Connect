// Красивые функции для работы с cookie

export type CookieOptions = {
	days?: number
	path?: string
	domain?: string
	secure?: boolean
	sameSite?: 'Strict' | 'Lax' | 'None'
}

/**
 * Установить cookie с опциями
 * @param name Имя cookie
 * @param value Значение
 * @param options Опции (срок, путь, домен, secure, sameSite)
 */
export function setCookie(
	name: string,
	value: string,
	options: CookieOptions = {}
) {
	let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(
		value || ''
	)}`
	if (options.days) {
		const date = new Date()
		date.setTime(date.getTime() + options.days * 24 * 60 * 60 * 1000)
		cookieStr += `; expires=${date.toUTCString()}`
	}
	if (options.path) cookieStr += `; path=${options.path}`
	else cookieStr += '; path=/'
	if (options.domain) cookieStr += `; domain=${options.domain}`
	if (options.secure) cookieStr += '; secure'
	if (options.sameSite) cookieStr += `; samesite=${options.sameSite}`
	document.cookie = cookieStr
}

/**
 * Получить cookie по имени
 * @param name Имя cookie
 * @returns Значение или undefined
 */
export function getCookie(name: string): string | undefined {
	const nameEQ = encodeURIComponent(name) + '='
	const ca = document.cookie.split(';')
	for (let c of ca) {
		c = c.trim()
		if (c.indexOf(nameEQ) === 0) {
			return decodeURIComponent(c.substring(nameEQ.length))
		}
	}
	return undefined
}

/**
 * Удалить cookie
 * @param name Имя cookie
 * @param options Опции (путь, домен)
 */
export function removeCookie(
	name: string,
	options: Pick<CookieOptions, 'path' | 'domain'> = {}
) {
	setCookie(name, '', { days: -1, ...options })
}

/**
 * Проверить, существует ли cookie
 * @param name Имя cookie
 * @returns true, если cookie есть
 */
export function hasCookie(name: string): boolean {
	return getCookie(name) !== undefined
}

/**
 * Получить все cookie как объект
 * @returns Объект всех cookie
 */
export function getAllCookies(): Record<string, string> {
	return document.cookie.split(';').reduce((acc, c) => {
		const [key, ...v] = c.trim().split('=')
		if (key) acc[decodeURIComponent(key)] = decodeURIComponent(v.join('='))
		return acc
	}, {} as Record<string, string>)
}
