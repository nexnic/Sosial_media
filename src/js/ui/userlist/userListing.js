import { load } from '../../storage/load'
import { PageCleaner } from '../../tools/pageClean'
import { getUsersapi } from '../../api/profiles/profileslist'
import { templetuserListpage } from '../../templet/usersProfiles/templetuserlist'

export const pageConfigUserList = () => {
	const token = load('token')
	const data = getUsersapi(token)
	PageCleaner()
	templetuserListpage(data)
}
