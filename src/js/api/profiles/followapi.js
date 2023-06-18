export async function followingAPI(userName, token) {
	try {
		const response = await fetch(
			`https://nf-api.onrender.com/api/v1/social/profiles/${userName}/follow`,
			{
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
		if (response.ok) {
			if (response.status === 200) {
				console.log(await response.json())
			}
		}
	} catch (error) {
		console.log(error)
	}
}
