async function loadRepos() {
	let username = document.getElementById('username').value
	let container = document.querySelector('#repos')

	let url = `https://api.github.com/users/${username}/repos`
/*
	fetch(url)
		.then(response => {
			if (response.ok == false) {
				throw new Error(`${response.status}: ${response.statusText}`)
			}
			return response.json();
		}
		)
		.then(handleResponse)
		.catch(handleError)
*/

	try {
		const response = await fetch(url)
		if (response.ok == false) {
			throw new Error(`${response.status}: ${response.statusText}`)
		}

		const data = await response.json();
		handleResponse(data)
	} catch (error) {
		handleError(error)
		// console.log('Error', error)
	}

	

	
	function handleResponse(data) {
		// while( container.children.length > 0) {
		// 	container.removeChild(container.children[0])
		// }
		console.log(data)
		container.innerHTML = ''

		for (let repo of data) {
			// let li = document.createElement('li')
			// let aElement = document.createElement('a')
			// aElement.href = repo.html_url
			// aElement.textContent = `${repo.full_name}`
			// li.appendChild(aElement)
			let li = document.createElement('li')
			li.innerHTML = `<a href="${repo.html_url}">
			${repo.full_name}
			</a>`
			container.appendChild(li)
		}
	}

	function handleError(error) {
		container.innerHTML = '';
		container.textContent = `${error.message}`
	}
}
