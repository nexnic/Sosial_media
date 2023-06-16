import listeners from './listeners/index'
import ui from './ui/index'

listeners()
ui()

document.querySelector('#usersBtn')?.addEventListener('click', (event) => {
	console.log('click')
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
