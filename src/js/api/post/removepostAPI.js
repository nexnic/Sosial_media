export async function removePostAPI(token, id) {
	try {
		const response = await fetch(
			`https://nf-api.onrender.com/api/v1/social/posts/${id}`,
			{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
		if (response.ok) {
			console.log(response.json())
		}
	} catch (error) {
		console.log(error)
	}
}
