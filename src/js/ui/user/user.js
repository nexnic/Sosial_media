import { load } from '../../storage/load'
import { PageCleaner } from '../../tools/pageClean'
import { getProfileDetail } from '../../api/profile/profileapi'
import { templetnavbar } from '../../templet/navigation/templetnav'

export const pageConfigUser = () => {
	const userDate = load('userData')
	const { name: userName, accessToken: token } = userDate
	PageCleaner()
	getProfileDetail(userName, token)
	templetnavbar(userDate)
}
