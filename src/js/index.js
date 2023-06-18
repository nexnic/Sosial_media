import listeners from './listeners/index'
import ui from './ui/index'
import { save } from './storage/save'

listeners()
ui()

document.querySelector('#usersBtn')?.addEventListener('click', (event) => {
	save('page', 'user-list')
})

document.querySelector('#profilebtn')?.addEventListener('click', (event) => {
	save('page', 'user')
})

document.querySelector('#addbtn')?.addEventListener('click', (event) => {
	$('#modal__post').modal('toggle')
})

document.querySelector('#searchbtn')?.addEventListener('click', (event) => {
	console.log('click')
})

document.querySelector('#homebtn')?.addEventListener('click', () => {
	console.log('click')
})
