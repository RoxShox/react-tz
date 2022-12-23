function checkBracket(str) {
	let open = ['{', '(', '[']
	let close = ['}', ')', ']']
	let stack = []
	let openInd
	let closeInd

	for (let i = 0; i < str.length; i++) {
		console.log(str[i])
		openInd = open.indexOf(str[i])
		if (openInd !== -1) {
			stack.push(openInd)
		}

		closeInd = close.indexOf(str[i])
		if (closeInd !== -1) {
			openInd = stack.pop()
			if (closeInd !== openInd) {
				return false
			}
		}
	}
	if (stack.length !== 0) {
		return false
	}
	return true
}

checkBracket('text with([{brackets}])')
