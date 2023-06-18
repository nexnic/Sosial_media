import { templetErroMsg } from '../../templet/error/errorform'

export async function addPostAPI(token, data) {
	console.log(data)
	try {
		const response = await fetch(
			'https://nf-api.onrender.com/api/v1/social/posts',
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json; charset=UFT-8',
				},
				body: JSON.stringify(data),
			}
		)
		if (response.ok) {
			if (response.status == 200) {
				location.reload()
			}
			if (response.status >= 400) {
				const data = await response.json()
				const headline = 'msgError'
				const msg = data.errors[0].message
				const element = '#modal__post--error'
				const submit = '#btn__submit--login'

				templetErroMsg(headline, msg, element, submit)
			}
		}
	} catch (error) {
		console.log(error)
	}
}
