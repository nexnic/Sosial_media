import { load } from '../../storage/load'
import { GetallPost } from '../../api/post/getAllpost'
import { templetnavbar } from '../../templet/navigation/templetnav'

export const pageConfigFeedpage = () => {
	const token = load('token')
	const userdata = load('userData')
	console.log(token)
	GetallPost(token)
	templetnavbar(userdata)
}
