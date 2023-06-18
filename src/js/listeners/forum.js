import { valEmail, valPWD, valName } from '../tools/validator'
import { LoginUserAPI } from '../api/auth/login/loginapi'
import { RegUserAPI } from '../api/auth/register/apiregister'
import { addPostAPI } from '../api/post/addpostAPI'
import { editPostAPI } from '../api/post/updatePostAPI'
import { load } from '../storage/load'

export const listenersform = (event) => {
	const e = event
	console.log(e)
	const userdata = load('userData')
	const { accessToken: token } = userdata

	document
		.querySelector('form#form__register')
		?.addEventListener('submit', (e) => {
			e.preventDefault()
			const Form = e.target
			const FormFields = Form.elements
			const fullname = FormFields[0].value
			const email = FormFields[1].value
			const _pwd = FormFields[2].value

			// Check Value
			const namevali = valName(fullname)
			const emailvali = valEmail(email)
			const pwdvali = valPWD(_pwd)
			console.log(emailvali, pwdvali, namevali)

			const json = {
				name: `${fullname}`,
				email: `${email}`,
				password: `${_pwd}`,
				avatar: '',
				banner: '',
			}
			console.log(json)

			if (!emailvali) {
				FormFields[1].classList.add('is-invalid')
				FormFields[1].classList.remove('is-valid')
			}
			if (!pwdvali) {
				FormFields[2].classList.add('is-invalid')
				FormFields[2].classList.remove('is-valid')
			}
			if (!namevali) {
				FormFields[0].classList.add('is-invalid')
				FormFields[0].classList.remove('is-valid')
			}
			if (emailvali) {
				FormFields[1].classList.add('is-valid')
				FormFields[1].classList.remove('is-invalid')
			}
			if (pwdvali) {
				FormFields[2].classList.add('is-valid')
				FormFields[2].classList.remove('is-invalid')
			}
			if (namevali) {
				FormFields[0].classList.remove('is-invalid')
				FormFields[0].classList.add('is-valid')
			}
			if (emailvali && pwdvali && namevali) {
				RegUserAPI(json)
			}
		})

	document
		.querySelector('form#form__login')
		?.addEventListener('submit', (e) => {
			e.preventDefault()
			const span = document.createElement('span')
			span.classList.add('spinner-grow', 'spinner-grow-sm')

			const Form = e.target
			const FormFields = Form.elements
			const email = FormFields[0].value
			const _pwd = FormFields[1].value
			FormFields[2].innerText = 'Loading '
			FormFields[2].append(span)
			FormFields[2].classList.add('disabled')

			const json = {
				email: `${email}`,
				password: `${_pwd}`,
			}

			const emailvali = valEmail(email)
			const pwdvali = valPWD(_pwd)

			if (emailvali) {
				FormFields[0].classList.add('is-valid')
				FormFields[0].classList.remove('is-invalid')
			}
			if (pwdvali) {
				FormFields[1].classList.add('is-valid')
				FormFields[1].classList.remove('is-invalid')
			}
			if (!emailvali) {
				FormFields[0].classList.add('is-invalid')
			}
			if (!pwdvali) {
				FormFields[1].classList.add('is-invalid')
			}
			if (emailvali && pwdvali) {
				LoginUserAPI(json)
			}
		})

	document.querySelector('#modal__post')?.addEventListener('submit', (e) => {
		e.preventDefault()
		const Form = e.target
		const FormFields = Form.elements

		const title = FormFields[0].value
		const tage = FormFields[1].value.split(',').map((tag) => tag.trim())
		const body = FormFields[2].value
		const media = FormFields[3].value.trim()

		const json = {
			title: title,
			body: body,
			media: media,
			tags: tage,
		}
		addPostAPI(token, json)
	})

	document
		.querySelector('form#form__postedit')
		?.addEventListener('submit', (e) => {
			e.preventDefault()
			const Form = e.target
			const FormFields = Form.elements

			const id = document.querySelector('form#form__postedit').value
			const title = FormFields[0].value.trim()
			const body = FormFields[1].value.trim()
			const tage = FormFields[2].value.split(',').map((tag) => tag.trim())
			const media = FormFields[3].value.trim()
			console.log(id)

			const json = {
				title: title,
				body: body,
				media: media,
				tags: tage,
			}

			editPostAPI(token, json, id)
		})
}
