import { load } from '../storage/load'

export function searchAfterItem(json, searchitem) {
	function searchreturn(obj, item) {
		for (const key in obj) {
			if (typeof obj[key] === 'object') {
				const result = searchAfterItem(obj[key], item)
				if (result !== null) {
					return result
				}
			} else if (typeof obj[key] === 'string' && obj[key].includes(item)) {
				if (obj.prototype.hasOwnProperty.call('id')) {
					return obj.id
				}
			}
		}
		return null
	}

	const searchResult = searchreturn(json, searchitem)
	return searchResult
}
