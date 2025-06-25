export const sendLocalNotification = (
	title: string,
	body: string,
	icon?: string
) => {
	if ('Notification' in window) {
		const notificationOptions: NotificationOptions = { body }
		if (icon) {
			notificationOptions.icon = icon
		} else {
			notificationOptions.icon =
				'/360_F_269645677_oAjFKkNrezyIeJ6TmawcwEmERIXlQgi5-removebg-preview.png' // путь к логотипу по умолчанию
		}
		if (Notification.permission === 'granted') {
			new Notification(title, notificationOptions)
		} else if (Notification.permission !== 'denied') {
			Notification.requestPermission().then(permission => {
				if (permission === 'granted') {
					new Notification(title, notificationOptions)
				} else {
					alert('Вы не разрешили уведомления')
				}
			})
		} else {
			alert('Вы не разрешили уведомления')
		}
	}
}
