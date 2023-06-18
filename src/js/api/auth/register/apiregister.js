import { templetErroMsg } from '../../../templet/error/errorform'

export async function RegUserAPI(user) {
	console.log(user)
	try {
		const response = await fetch(
			'https://nf-api.onrender.com/api/v1/social/auth/register',
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UFT-8',
				},
				body: JSON.stringify(user),
			}
		)

		if (response.ok) {
			const data = await response.json()
			if (response.status === 200) {
				location.reload()
			}
			if (response.status >= 400) {
				const headline = 'msgError '
				const msg = data.errors[0].message
				const element = '#modal__register--error'
				const submit = '#btn__submit--register'
				templetErroMsg(headline, msg, element, submit)
			}
		}
	} catch (error) {
		alert(error)
	}
}
/*
avatar
: 
""
banner
: 
""
email
: 
"test2020@noroff.no"
id
: 
1934
name
: 
"kenterikHole"
*/
