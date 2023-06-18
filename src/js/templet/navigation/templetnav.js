import { load } from '../../storage/load'

export const templetnavbar = (UserData) => {
	const { name: userName, avatar: userImage } = UserData

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
	const searchbtn = document.createElement('button')
	searchbtn.classList.add('btn')
	searchbtn.setAttribute('type', 'button')
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

	navbar.append(content)
	content.append(profilebtn)
	profilebtn.append(profileImg)
	content.append(usersBtn)

	usersBtn.append(usersIcon)
	content.append(addbtn)
	addbtn.append(addIcon)
	content.append(searchbtn)
	searchbtn.append(searchIcon)
	content.append(homebtn)
	homebtn.append(homeIcon)
}
