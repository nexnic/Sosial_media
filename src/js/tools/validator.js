export const valEmail = (email) => {
	const regKey = /^[a-z0-9._%+-]+@(noroff.no|stud.noroff.no)$/
	let check = regKey.test(email)
	if (check) {
		return true
	} else {
		return false
	}
}

export const valPWD = (pwd) => {
	const regKey = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
	let check = regKey.test(pwd)
	if (check) {
		return true
	} else {
		return false
	}
}

export const valName = (FullName) => {
	const regKey = /^[a-zA-Z0-9_]+$/
	let check = regKey.test(FullName)
	if (check) {
		return true
	} else {
		return false
	}
}
