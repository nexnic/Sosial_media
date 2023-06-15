export const load = (value) => {
	return JSON.parse(localStorage.getItem(value))
}
