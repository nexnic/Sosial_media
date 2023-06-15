import { load } from '../storage/load'
import { save } from '../storage/save'

export const onSite = () => {
	const site = load('page')
	if (!site) {
		save('page', 'home')
	}
	if (site === 'home') {
		console.log('home')
	}
}
