/**
 * Установить значение в localStorage
 * @param key Ключ
 * @param value Значение (любое, будет сериализовано)
 */
export function setItem<T = unknown>(key: string, value: T) {
	localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Получить значение из localStorage
 * @param key Ключ
 * @returns Значение или undefined
 */
export function getItem<T = unknown>(key: string): T | undefined {
	const item = localStorage.getItem(key)
	if (item === null) return undefined
	try {
		return JSON.parse(item) as T
	} catch {
		return undefined
	}
}

/**
 * Удалить значение из localStorage
 * @param key Ключ
 */
export function removeItem(key: string) {
	localStorage.removeItem(key)
}

/**
 * Проверить, есть ли ключ в localStorage
 * @param key Ключ
 * @returns true, если есть
 */
export function hasItem(key: string): boolean {
	return localStorage.getItem(key) !== null
}

/**
 * Получить все значения localStorage как объект
 * @returns Объект всех пар ключ-значение
 */
export function getAllItems(): Record<string, unknown> {
	const out: Record<string, unknown> = {}
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i)
		if (key) {
			try {
				out[key] = JSON.parse(localStorage.getItem(key) as string)
			} catch {
				out[key] = localStorage.getItem(key)
			}
		}
	}
	return out
}
