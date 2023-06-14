export async function RegUserAPI(user) {
	console.log(user)
	try {
		const response = await fetch(
			'https://nf-api.onrender.com/api/v1/social/auth/register',
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UFT-8',
				},
				body: JSON.stringify(user),
			}
		)
		console.log(response.statusText)
		if (response.ok) {
			const data = await response.json()
			console.log(data)
		}
	} catch (error) {
		console.log(error)
	}
}
/*
avatar
: 
""
banner
: 
""
email
: 
"test2020@noroff.no"
id
: 
1934
name
: 
"kenterikHole"
*/
