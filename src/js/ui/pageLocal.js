import { load } from '../storage/load'
import { save } from '../storage/save'
import home from './home/index'
import feedpage from './feedpage/index'
import user from './user/index'

export const onSite = () => {
	const site = load('page')
	if (!site) {
		save('page', 'home')
	}
	if (site === 'home') {
		console.log('home')
		home()
	}
	if (site === 'feedpage') {
		console.log('feedpage')
		feedpage()
	}
	if (site === 'user') {
		console.log('user site')
		user()
	}
}
