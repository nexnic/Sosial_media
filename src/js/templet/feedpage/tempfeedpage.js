import { load } from '../../storage/load'
import { removePostAPI } from '../../api/post/removepostAPI'

export const tempFeedPage = (key) => {
	const User = load('userData')
	const { name: Currentuser, accessToken: token } = User

	// Select Element
	const main = document.querySelector('main')
	main.classList.add(
		'd-flex',
		'flex-column',
		'gap-3',
		'align-items-center',
		'justify-content-center'
	)

	key.forEach((data) => {
		const {
			id: postId,
			title: postTitle,
			media: postImg,
			body: postBody,
			author,
			comments,
			created: cratedData,
		} = data
		const { name: postName, avatar: PostImage } = author
		const IsUser = postName === Currentuser

		// Card
		const card = document.createElement('card')
		card.classList.add('card', 'w-50')

		main.append(card)

		// Card Image
		const cardImage = document.createElement('img')
		cardImage.src = postImg
		card.append(cardImage)

		// header

		const cardHeader = document.createElement('div')
		cardHeader.classList.add(
			'card-header',
			'd-flex',
			'justify-content-between'
		)

		const Profileinfo = document.createElement('div')

		const ProfileImg = document.createElement('img')
		ProfileImg.classList.add('rounded-circle')
		ProfileImg.style.maxHeight = '25px'
		ProfileImg.style.minHeight = '25px'
		ProfileImg.style.minWidth = '25px'
		ProfileImg.style.maxWidth = '25px'

		const ProfileName = document.createElement('small')
		ProfileName.innerText = postName
		if (PostImage) {
			ProfileImg.src = PostImage
		} else {
			ProfileImg.src = './public/image/default-Profile.png'
			ProfileImg.alt = 'Image of default avatar'
		}

		const ProfileData = document.createElement('div')
		const MadDate = document.createElement('small')
		MadDate.innerText = cratedData

		card.append(cardHeader)
		cardHeader.append(Profileinfo)
		Profileinfo.append(ProfileImg)
		Profileinfo.append(ProfileName)
		cardHeader.append(ProfileData)
		ProfileData.append(MadDate)

		// card Body

		const cardbody = document.createElement('div')
		cardbody.classList.add('card-body')

		// card title
		const cardTitle = document.createElement('h5')
		cardTitle.innerText = postTitle

		// Card Description
		const cardDesc = document.createElement('p')
		cardDesc.innerText = postBody

		// Remove Btn
		const removebtn = document.createElement('button')
		removebtn.setAttribute('value', postId)
		removebtn.classList.add('btn')
		removebtn.innerText = 'remove'

		card.append(cardbody)
		cardbody.append(cardTitle)
		cardbody.append(cardDesc)
		if (IsUser) {
			cardbody.append(removebtn)
			removebtn.addEventListener('click', (e) => {
				removePostAPI(token, postId)
			})
		}

		// card Comment
		const comcon = document.createElement('div')

		cardbody.append(comcon)
		comments.forEach((list) => {
			//Destructur
			const { body, created, id, owner, postId, author } = list
			const { name: cName, avatar: cimage } = author

			// content
			const comcont = document.createElement('div')
			comcont.classList.add('card-footer')

			const combody = document.createElement('div')
			combody.classList.add('media-body')

			// User Profile
			const comProfileimage = document.createElement('img')
			comProfileimage.classList.add('rounded-circle', 'mr-3')
			comProfileimage.style.maxHeight = '25px'
			comProfileimage.style.minHeight = '25px'
			comProfileimage.style.maxWidth = '25px'
			comProfileimage.style.minWidth = '25px'

			if (cimage) {
				comProfileimage.src = cimage
				comProfileimage.alt = cName
			} else {
				comProfileimage.src = './public/image/default-Profile.png'
				comProfileimage.alt = 'Image of default avatar'
			}

			// Name
			const comName = document.createElement('small')
			comName.classList.add('mt-0')
			comName.innerText = cName

			// Body Text
			const combodyText = document.createElement('p')
			combodyText.innerText = body

			comcon.append(comcont)
			comcont.append(comProfileimage)
			comcont.append(comName)
			comcont.append(combody)
			combody.append(combodyText)
		})
	})
}
