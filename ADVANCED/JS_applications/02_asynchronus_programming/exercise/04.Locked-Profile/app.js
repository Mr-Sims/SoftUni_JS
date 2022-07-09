const main = document.getElementById('main')

function lockedProfile() {
    renderProfiles()
    main.addEventListener('click', onToggle)
}

async function renderProfiles() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles'

    const res = await fetch(url);
    const data = await res.json();

    Object.values(data).forEach(p => {
        // let profileElement = document.createElement('div')
        // profileElement.classList += 'profile'
        // profileElement.innerHTML = `
        //         <img src="./iconProfile2.png" class="userIcon" />
		// 		<label>Lock</label>
		// 		<input type="radio" name="user1Locked" value="lock" checked>
		// 		<label>Unlock</label>
		// 		<input type="radio" name="user1Locked" value="unlock"><br>
        //         <hr>
		// 		<label>Username</label>

		// 		<input type="text" name="user1Username" value="${p.username}" disabled readonly />
		// 		<div class="hiddenInfo">
		// 			<hr>
		// 			<label>Email:</label>
		// 			<input type="email" name="user1Email" value="${p.email}" disabled readonly />
		// 			<label>Age:</label>
		// 			<input type="email" name="user1Age" value="${p.age}" disabled readonly />
		// 		</div>
		// 		<button>Show more</button>
        //     `
        const profileElement = e('div', {className: 'profile'}, 
            e('img', {src: './iconProfile2.png', className: 'userIcon'}),
            e('label', {}, 'Lock'),
            e('input', {type: 'radio', name: 'user1Locked', value: 'lock', checked: true}),
            e('label', {}, 'Unlock'),
            e('input', {type: 'radio', name: 'user1Locked', value: 'unlock'}),
            e('hr', {}),
            e('label', {}, 'Username'),
            e('input', {type: 'text', name: 'user1Username', value: p.username, disabled: true, readonly: true}),
            e('div', {className: 'hiddenInfo'}, 
                e('hr', {}),
                e('label', {}, 'Email:'),
                e('input', {type:'email', name: 'user1Email', value: p.email, disabled: true, readonly: true}),
                e('label', {}, 'Age:'),
                e('input', {type:'email', name: 'user1Age', value: p.age, disabled: true, readonly: true})),
            e('button', {}, 'Show more')
            )
            main.appendChild(profileElement)
    })
}

// with event propagation
function onToggle(e) {
    const hiddenDiv = e.target.parentNode.querySelector('.hiddenInfo')
    if (e.target.parentNode.children[4].checked) {
        if (e.target.tagName == 'BUTTON') {
            if(e.target.textContent == 'Show more') {
                Array.from(hiddenDiv.children).map(x => {
                    x.style.display = 'block'
                });
                e.target.textContent = 'Hide it'
            }
            else if( e.target.textContent == 'Hide it') {
                Array.from(hiddenDiv.children).map(x => {
                    x.style.display = 'none'
                });
                e.target.textContent = 'Show more'
            }
        }
    }
}


// le function pour elemont creature
function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}