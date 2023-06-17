export async function getUsersapi(token) {
	try {
		const response = await fetch(
			'https://nf-api.onrender.com/api/v1/social/profiles?_followers=true&_following=true',
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
				return await response.json()
			}
		}
	} catch (error) {
		console.log(error)
	}
}
