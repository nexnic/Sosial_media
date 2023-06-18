import { templetErroMsg } from '../../../templet/error/errorform'
import { save } from '../../../storage/save'

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
				const data = await response.json()
				save('userData', data)
				save('token', data.accessToken)
				save('page', 'feedpage')
				location.reload()
			}
		}
		if (response.status >= 400) {
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
