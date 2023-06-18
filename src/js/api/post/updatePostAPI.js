export async function editPostAPI(token, dataJson, id) {
	try {
		const response = await fetch(
			`https://nf-api.onrender.com/api/v1/social/posts/${id}`,
			{
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json; charset=UFT-8',
				},
				body: JSON.stringify(dataJson),
			}
		)
	} catch (error) {
		console.log(error)
	}
}
