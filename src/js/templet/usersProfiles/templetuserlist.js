import { load } from '../../storage/load'
import { followingAPI } from '../../api/profiles/followapi'
import { unfollingAPI } from '../../api/profiles/unfollowapi'

export async function templetuserListpage(data) {
	try {
		const userData = await data
		const CurrentUser = load('userData')
		const { name: CurrentName, accessToken: token } = CurrentUser
		console.log(token)
		const main = document.querySelector('main')
		userData.forEach((list) => {
			const { name: UserName, avatar: Profileimage, following, email } = list

			// card
			const container = document.createElement('div')
			container.classList.add(
				'card',
				'd-flex',
				'flex-row',
				'list-group-item',
				'm-3',
				'bg-gray',
				'w-25',
				'align-items-center'
			)
			const textBox = document.createElement('div')
			textBox.classList.add('d-flex', 'flex-column', 'w-100')
			const contentinfo = document.createElement('div')

			// Name
			const h5 = document.createElement('h5')
			h5.innerText = UserName

			// Profile image
			const profileimg = document.createElement('img')
			profileimg.classList.add('rounded-circle')
			profileimg.style.maxHeight = '25px'
			profileimg.style.minHeight = '25px'
			profileimg.style.maxWidth = '25px'
			profileimg.style.minWidth = '25px'

			if (Profileimage) {
				profileimg.src = Profileimage
			} else {
				profileimg.src = './public/image/default-Profile.png'
			}

			main.append(container)
			container.append(profileimg)
			container.append(textBox)
			textBox.append(h5)

			// Following Button
			const isFollowing = list.followers.some((followingUser) => {
				return followingUser.name === CurrentName
			})

			const followbtn = document.createElement('button')
			followbtn.classList.add('btn', 'followingBtn')
			followbtn.setAttribute('id', 'followbtn')
			followbtn.setAttribute('value', `${UserName}`)

			if (isFollowing) {
				followbtn.innerText = 'Unfollow'
				container.append(followbtn)
				followbtn.addEventListener('click', (e) => {
					followbtn.innerText = 'follow'
					unfollingAPI(UserName, token)
				})
			} else {
				followbtn.innerText = 'follow'
				container.append(followbtn)

				followbtn.addEventListener('click', (e) => {
					followbtn.innerText = 'unfollow'
					followingAPI(UserName, token)
				})
			}
		})
	} catch (error) {
		console.log(error)
	}
}
/*
if(isFollowing) {
    console.log(isFollowing)
    console.log('following')
    followbtn.innerText = 'unfollow'
    container.append(followbtn)
    console.log(UserName)
}
if(!isFollowing){
    followbtn.innerText = 'Follow'
    container.append(followbtn)
   
}
else {
    console.log(!isFollowing)
    followbtn.innerText = 'Follow'
    container.append(followbtn)
    console.log(UserName)
    followbtn.addEventListener('click', (e) => {
        followbtn.innerText ='unfollow'
        followingAPI(UserName, token)
        
    })
}
*/
