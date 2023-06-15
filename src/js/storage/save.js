export const save = (key, array) => {
	try {
		localStorage.setItem(key, JSON.stringify(array))
		return true
	} catch {
		return false
	}
}
