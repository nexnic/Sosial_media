import { load } from '../../storage/load'
import { searchAfterItem } from '../../tools/search'

export const templetnavbar = (UserData) => {
	const onSite = load('page')
	const inputdata = UserData

	const { name: userName, avatar: userImage } = inputdata
	// Select element
	const navbar = document.querySelector('#nav__bottom')
	navbar.classList.add('navbar', 'fixed-bottom', 'bg-primary', 'text-white')

	const content = document.createElement('div')
	content.classList.add('d-flex', 'justify-content-between')

	//Profilebtn
	const profilebtn = document.createElement('button')
	profilebtn.setAttribute('type', 'button')
	profilebtn.setAttribute('id', 'profilebtn')
	profilebtn.classList.add('btn')
	const profileImg = document.createElement('img')
	profileImg.classList.add('rounded-circle')
	profileImg.style.maxHeight = '25px'
	profileImg.style.minHeight = '25px'
	profileImg.style.maxWidth = '25px'
	profileImg.style.minWidth = '25px'
	console.log(userImage)
	if (userImage) {
		profileImg.src = userImage
		profileImg.alt = userName
	} else {
		profileImg.src = './public/image/default-Profile.png'
		profileImg.alt = 'Image of default avatar'
	}

	// Users
	const usersBtn = document.createElement('button')
	usersBtn.classList.add('btn')
	usersBtn.setAttribute('type', 'button')
	usersBtn.setAttribute('id', 'usersBtn')

	const usersIcon = document.createElement('i')
	usersIcon.classList.add('fa-solid', 'fa-users')

	// Add button
	const addbtn = document.createElement('button')
	addbtn.classList.add('btn')
	addbtn.setAttribute('type', 'button')
	addbtn.setAttribute('id', 'addbtn')

	const addIcon = document.createElement('i')
	addIcon.classList.add('fa-solid', 'fa-plus')

	// search button
	const formsearch = document.createElement('form')
	formsearch.setAttribute('id', 'form__search')
	const searchdiv = document.createElement('div')
	searchdiv.classList.add('input-group', 'mb-3')

	const searchdivsub = document.createElement('div')
	searchdivsub.classList.add('input-group-append')

	const searchinput = document.createElement('input')
	searchinput.classList.add('form-control')
	searchinput.setAttribute('type', 'text')
	const searchbtn = document.createElement('button')
	searchbtn.classList.add('btn', 'btn-outline-secondary')
	searchbtn.setAttribute('type', 'submit')
	searchbtn.setAttribute('id', 'searchbtn')

	const searchIcon = document.createElement('i')
	searchIcon.classList.add('fa-solid', 'fa-magnifying-glass')

	// Home Button
	const homebtn = document.createElement('button')
	homebtn.classList.add('btn')
	homebtn.setAttribute('type', 'button')
	homebtn.setAttribute('id', 'homebtn')

	const homeIcon = document.createElement('i')
	homeIcon.classList.add('fa-solid', 'fa-house')

	// logout btn
	const logoutbtn = document.createElement('button')
	logoutbtn.classList.add('btn')
	logoutbtn.setAttribute('type', 'button')
	logoutbtn.setAttribute('id', 'logoutbtn')

	const logoutIcon = document.createElement('i')
	logoutIcon.classList.add('fa-solid', 'fa-right-from-bracket')

	if (onSite === 'feedpage') {
		homebtn.classList.add('btn', 'disabled')
	}
	if (onSite === 'user') {
		addbtn.classList.add('btn', 'disabled')
	}
	if (onSite === 'user-list') {
		usersBtn.classList.add('btn', 'disabled')
		addbtn.classList.add('btn', 'disabled')
	}

	navbar.append(content)
	content.append(profilebtn)
	profilebtn.append(profileImg)
	content.append(logoutbtn)
	logoutbtn.append(logoutIcon)
	content.append(usersBtn)

	usersBtn.append(usersIcon)
	content.append(addbtn)
	addbtn.append(addIcon)

	content.append(homebtn)
	homebtn.append(homeIcon)
	content.append(formsearch)
	formsearch.append(searchdiv)
	searchdiv.append(searchinput)
	searchdiv.append(searchdivsub)
	searchdivsub.appendChild(searchbtn)
	searchbtn.append(searchIcon)

	formsearch.addEventListener('submit', (event) => {
		event.preventDefault()
		const data = load('feedpost')
		const searchData = JSON.stringify(data)

		const Form = event.target
		const FormFields = Form.elements
		const search = FormFields[0].value.trim()

		const searchresult = searchAfterItem(data, search)

		if (searchresult) {
			document.getElementById(`post__${searchresult}`).focus()
		}
	})
}
