export async function reactAPI(token, id, symbol) {
	try {
		const response = await fetch(
			`https://nf-api.onrender.com/api/v1/social/posts/${id}/react/${symbol}`,
			{
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
		console.log(await response.json())
	} catch (error) {
		console.log(error)
	}
}
