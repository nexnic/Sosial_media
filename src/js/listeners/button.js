export const listenersbtn = (e) => {
	const event = e

	document.querySelector('#btn-register')?.addEventListener('click', () => {
		$('#modal__register').modal('toggle')
	})
	document.querySelector('#btn-login')?.addEventListener('click', () => {
		$('#modal__login').modal('toggle')
	})

	document
		.querySelector('#form__login--btn')
		?.addEventListener('submit', () => {
			console.log('test click')
		})
}
