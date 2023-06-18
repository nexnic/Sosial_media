import { changeImageAPI } from '../../api/profile/changeimageapi'
import { load } from '../../storage/load'

export const templetprofile = (data) => {
	const token = load('token')
	try {
		console.log(data)
		const {
			name: UserName,
			avatar: UserImage,
			banner: UserBanner,
			email: UserEmail,
		} = data

		const main = document.querySelector('main')
		main.classList.add(
			'd-flex',
			'justify-content-center',
			'bg-gray',
			'flex-column'
		)

		// Create Profile
		const profileContainer = document.createElement('div')
		profileContainer.classList.add(
			'd-flex',
			'justify-content-center',
			'g-2',
			'p-3',
			'w-50',
			'card'
		)
		main.append(profileContainer)

		// Create Profile Image
		const profileimg = document.createElement('img')
		profileimg.classList.add('rounded-circle')
		profileimg.style.minHeight = '150px'
		profileimg.style.maxHeight = '150px'
		profileimg.style.minWidth = '150px'
		profileimg.style.maxWidth = '150px'

		if (UserImage) {
			profileimg.src = UserImage
			profileimg.alt = UserName
		} else {
			profileimg.src = './public/image/default-Profile.png'
			profileimg.alt = 'Image of default avatar'
		}
		profileContainer.append(profileimg)

		// Create Name
		const textname = document.createElement('h4')
		textname.innerText = `Name: ${UserName}`

		profileContainer.append(textname)

		// Create email

		// Settings
		const settingContainer = document.createElement('div')
		settingContainer.classList.add('d-flex', 'p-3', 'w-50', 'card')
		main.append(settingContainer)

		// Change Profile Image
		const headprofile = document.createElement('h5')

		const chanproform = document.createElement('form')
		chanproform.setAttribute('id', 'form__changeavatar')

		headprofile.innerText = 'Change Profile image'
		const chanProImg = document.createElement('div')
		chanProImg.classList.add('input-group', 'mb-3')

		const chanproginputdiv = document.createElement('div')
		chanproginputdiv.classList.add('input-group-append')

		const changproinput = document.createElement('input')
		changproinput.setAttribute('value', UserImage)
		changproinput.classList.add('form-control')
		changproinput.setAttribute('for', 'url')

		const changprobtn = document.createElement('button')
		changprobtn.classList.add('btn', 'btn-outline-secondary')
		changprobtn.innerText = 'Change Profile'
		changprobtn.setAttribute('type', 'submit')

		settingContainer.append(headprofile)
		settingContainer.append(chanproform)
		chanproform.append(chanProImg)
		chanProImg.append(changproinput)
		chanProImg.append(chanproginputdiv)
		chanproginputdiv.append(changprobtn)

		chanproform.addEventListener('submit', (event) => {
			event.preventDefault()
			const Form = event.target
			const FormFields = Form.elements
			const imageavatar = FormFields[0].value
			console.log(imageavatar)
			const imageDATA = {
				avatar: imageavatar,
			}

			changeImageAPI(token, imageDATA, UserName)
		})

		// Change Banner image
		const headBanner = document.createElement('h5')
		headBanner.innerText = 'Change Banner image'
		const chanbanform = document.createElement('form')

		const cangbanimg = document.createElement('div')
		cangbanimg.classList.add('input-group', 'mb-3')

		const changbanonputdiv = document.createElement('div')
		changbanonputdiv.classList.add('input-group-append')

		const inputchanbaninput = document.createElement('input')
		inputchanbaninput.setAttribute('value', UserBanner)
		inputchanbaninput.classList.add('form-control')

		const changebanbtn = document.createElement('button')
		changebanbtn.setAttribute('type', 'submit')
		changebanbtn.classList.add('btn', 'btn-outline-secondary')
		changebanbtn.innerText = 'Change Banner'

		settingContainer.append(headBanner)
		settingContainer.append(chanbanform)
		chanbanform.append(cangbanimg)
		cangbanimg.append(inputchanbaninput)
		cangbanimg.append(changbanonputdiv)
		changbanonputdiv.append(changebanbtn)

		chanbanform.addEventListener('submit', (event) => {
			event.preventDefault()
			const Form = event.target
			const FormFields = Form.elements

			const imageBanner = FormFields[0].value
			const imageDATA = {
				banner: imageBanner,
			}

			changeImageAPI(token, imageDATA, UserName)
		})
	} catch (error) {
		console.log(error)
	}
}
