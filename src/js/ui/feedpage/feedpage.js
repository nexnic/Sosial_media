import { load } from '../../storage/load'
import { GetallPost } from '../../api/post/getAllpost'

export const pageConfigFeedpage = () => {
	const token = load('token')
	console.log(token)
	GetallPost(token)
}
