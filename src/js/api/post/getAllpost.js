import { save } from '../../storage/save'
import { tempFeedPage } from '../../templet/feedpage/tempfeedpage'

export async function GetallPost(token) {
	try {
		const response = await fetch(
			'https://nf-api.onrender.com/api/v1/social/posts?_author=true&_comments=true&_reactions=true',
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json; charset=UFT-8',
				},
			}
		)
		console.log(response)
		if (response.ok) {
			if (response.status === 200) {
				const data = await response.json()
				console.log(typeof data)
				save('feedpost', data)
				console.log(data, 'login')
				tempFeedPage(data)
			}
		}
	} catch (error) {
		console.log(error)
	}
}
