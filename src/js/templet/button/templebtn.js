export const loadingbtn = (text, btnName) => {
	const btn = document.querySelector(`${btnName}`)
	const span = document.createElement('span')

	span.classList.add('spinner-grow spinner-grow-sm')
	span.setAttribute('role', 'status')
	span.setAttribute('aria-hidden', 'true')

	btn.append(span)
	btn.textContent = text

	return btn
}
