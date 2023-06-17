import listeners from './listeners/index'
import ui from './ui/index'
import { save } from './storage/save'

listeners()
ui()

document.querySelector('#usersBtn')?.addEventListener('click', (event) => {
	save('page', 'user-list')
})

document.querySelector('#addbtn')?.addEventListener('click', (event) => {
	console.log('click')
})

document.querySelector('#searchbtn')?.addEventListener('click', (event) => {
	console.log('click')
})

document.querySelector('#homebtn')?.addEventListener('click', () => {
	console.log('click')
})

const followingbtn = document.querySelector('#followbtn')

followingbtn?.addEventListener('click', () => {
	console.log('click')
})

document.querySelectorAll('.followingBtn')?.forEach((e) =>
	e.addEventListener('click', (e) => {
		console.log('div')
	})
)

let followingbtntest = document.querySelectorAll('#followbtn')
followingbtntest.forEach((item) => {
	item?.addEventListener('click', () => {
		console.log('click')
	})
})
