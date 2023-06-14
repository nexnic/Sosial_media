export const listenersbtn = (e) => {
	const event = e
	console.log(event)

	document.querySelector('#btn-register')?.addEventListener('click', () => {
		console.log('click Register user')

		//$('#modal__login').modal('toggle')
	})

	document
		.querySelector('#form__login--btn')
		?.addEventListener('submit', () => {
			console.log('test click')
		})
}
