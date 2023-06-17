export async function addPostAPI(token, data) {
	try {
		const response = await fetch('https://nf-api.onrender.com', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-type': 'application/json; charset=UFT-8',
			},
			body: JSON.stringify(data),
		})
	} catch (error) {
		console.log(error)
	}
}
