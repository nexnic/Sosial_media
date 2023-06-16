import { load } from '../../storage/load'
import { PageCleaner } from '../../tools/pageClean'
import { getProfileDetail } from '../../api/profile/profileapi'

export const pageConfigUser = () => {
	const userDate = load('userData')
	const { name: userName, accessToken: token } = userDate
	PageCleaner()
	getProfileDetail(userName, token)
}
