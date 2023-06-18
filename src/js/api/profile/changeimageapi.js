export async function changeImageAPI(token, inputdata, User) {
	try {
		const response = await fetch(
			`https://api.noroff.dev/api/v1/social/profiles/${User}/media`,
			{
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json; charset=UFT-8',
				},
				body: JSON.stringify(inputdata),
			}
		)
		console.log(await response.json())
	} catch (error) {
		console.log(error)
	}
}
