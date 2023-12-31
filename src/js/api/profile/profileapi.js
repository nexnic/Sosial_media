import { templetprofile } from '../../templet/profile/tempprofile'

export async function getProfileDetail(userName, token) {
	try {
		const response = await fetch(
			`https://nf-api.onrender.com/api/v1/social/profiles/${userName}?_followers=true&_following=true&_posts=true`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json; charset=UFT-8',
				},
			}
		)
		if (response.ok) {
			if (response.status === 200) {
				const data = await response.json()
				templetprofile(data)
			}
		}
	} catch (error) {
		console.log(error)
	}
}
