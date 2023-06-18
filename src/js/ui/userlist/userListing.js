import { load } from '../../storage/load'
import { PageCleaner } from '../../tools/pageClean'
import { getUsersapi } from '../../api/profiles/profileslist'
import { templetuserListpage } from '../../templet/usersProfiles/templetuserlist'
import { templetnavbar } from '../../templet/navigation/templetnav'

export const pageConfigUserList = () => {
	const userDate = load('userData')
	const token = load('token')
	const data = getUsersapi(token)
	PageCleaner()
	templetuserListpage(data)
	templetnavbar(userDate)
}
