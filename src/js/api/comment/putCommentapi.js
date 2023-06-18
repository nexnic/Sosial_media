export async function addCommentAPI(token, data, id) {
	try {
		const response = await fetch(
			`https://nf-api.onrender.com/api/v1/social/posts/${id}/comment`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json; charset=UFT-8',
				},
				body: JSON.stringify(data),
			}
		)
	} catch (error) {
		alert(error)
	}
}
