import { valEmail, valPWD, valName } from '../tools/validator'
import { LoginUserAPI } from '../api/auth/login/loginapi'
import { RegUserAPI } from '../api/auth/register/apiregister'

export const listenersform = (event) => {
	const e = event
	console.log(e)

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
}