import { templetErroMsg } from '../../../templet/error/errorform'

export async function LoginUserAPI(user) {
	console.log(user)
	try {
		const response = await fetch(
			'https://nf-api.onrender.com/api/v1/social/auth/login',
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UFT-8',
				},
				body: JSON.stringify(user),
			}
		)
		console.log(response)
		if (response.ok) {
			if (response.status === 200) {
				console.log('status 200')
			}
		}
		if (response.status === 401) {
			const data = await response.json()
			console.log(data)
			const headline = 'msgError '
			const msg = data.errors[0].message
			const element = '#modal__login--error'
			const submit = '#btn__submit--login'

			templetErroMsg(headline, msg, element, submit)
		}
	} catch (error) {
		console.log(error)
	}
}
// templetErroMsg
// modal__login--error
