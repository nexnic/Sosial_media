import listeners from './listeners/index'
import ui from './ui/index'
import { save } from './storage/save'
import { cleanall } from './storage/clean'

listeners()
ui()

document.querySelector('#usersBtn')?.addEventListener('click', (event) => {
	save('page', 'user-list')
	location.reload()
})

document.querySelector('#profilebtn')?.addEventListener('click', (event) => {
	save('page', 'user')
	location.reload()
})

document.querySelector('#logoutbtn')?.addEventListener('click', () => {
	cleanall()
	location.reload()
})

document.querySelector('#addbtn')?.addEventListener('click', (event) => {
	$('#modal__post').modal('toggle')
})

document.querySelector('#searchbtn')?.addEventListener('click', (event) => {
	console.log('click')
})

document.querySelector('#homebtn')?.addEventListener('click', () => {
	save('page', 'feedpage')
	location.reload()
})
