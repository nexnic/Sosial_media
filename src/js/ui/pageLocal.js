import { load } from '../storage/load'
import { save } from '../storage/save'
import home from './home/index'
import feedpage from './feedpage/index'
import user from './user/index'
import userlist from './userlist/index'

export const onSite = () => {
	const site = load('page')
	if (!site) {
		save('page', 'home')
	}
	if (site === 'home') {
		home()
	}
	if (site === 'feedpage') {
		feedpage()
	}
	if (site === 'user') {
		user()
	}
	if (site === 'user-list') {
		userlist()
	}
}
