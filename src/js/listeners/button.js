export const listenersbtn = (e) => {
	const event = e

	document.querySelector('#btn-register')?.addEventListener('click', () => {
		console.log('click Register user')

		$('#modal__login').modal('toggle')
	})

	document
		.querySelector('#form__login--btn')
		?.addEventListener('submit', () => {
			console.log('test click')
		})

	document.querySelector('#usersBtn')?.addEventListener('click', () => {
		console.log('click')
	})
}
