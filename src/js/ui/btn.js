export const btnListenerTwo = () => {
	const btn = document.querySelectorAll('#followbtn')

	for (let i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', (event) => {
			event.preventDefault()
			console.log('click')
		})
	}
}
export const btnListener = () => {
	document.querySelectorAll('#followbtn')?.forEach((e) =>
		e.addEventListener('click', (e) => {
			console.log('div')
		})
	)
}
