export async function getProfileDetail(userName, token) {
	try {
		const response = await fetch(
			`https://nf-api.onrender.com/api/v1/social/profiles/${userName}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json; charset=UFT-8',
				},
			}
		)
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}
