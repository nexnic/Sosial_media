export const remove = (key) => {
	try {
		localStorage.removeItem(key)
	} catch {
		return false
	}
}
