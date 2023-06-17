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
		console.log(await response.json())
	} catch (error) {
		console.log(error)
	}
}
