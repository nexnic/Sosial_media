export const templetErroMsg = (headline, text, element, submit) => {
	// Select Element
	const select = document.querySelector(`${element}`)
	const submitbtn = document.querySelector(`${submit}`)
	select.innerHTML = ''

	// Create Element
	const div = document.createElement('div')
	const btn = document.createElement('button')
	const span = document.createElement('span')
	const strong = document.createElement('strong')
	const small = document.createElement('small')

	// Set Type
	div.setAttribute('role', 'alert')
	btn.setAttribute('type', 'button')
	btn.setAttribute('data-dismiss', 'alert')
	btn.setAttribute('aria-label', 'Close')
	span.setAttribute('aria-hidden', 'true')

	// Set Class
	div.classList.add(
		'alert',
		'alert-warning',
		'alert-dismissible',
		'fade',
		'show'
	)
	btn.classList.add('close', 'btn')
	submitbtn.classList.remove('disabled', 'btn-primary')
	submitbtn.classList.add('btn-secondary')

	// Inner text
	span.innerText = 'x'
	strong.innerText = headline
	small.innerText = text
	submitbtn.innerText = 'Error'

	// Class Change

	// Append

	select.append(div)
	div.appendChild(strong)
	div.appendChild(small)
	div.appendChild(btn)
	btn.appendChild(span)

	return select
}
