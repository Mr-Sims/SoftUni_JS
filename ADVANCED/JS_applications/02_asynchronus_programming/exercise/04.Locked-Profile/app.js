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
        let profileElement = document.createElement('div')
        profileElement.classList += 'profile'
        profileElement.innerHTML = `
                <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${p.username}" disabled readonly />
				<div class="hiddenInfo">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${p.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="${p.age}" disabled readonly />
				</div>
				<button>Show more</button>
        `
        main.appendChild(profileElement)
    })
}

// with event propagation
function onToggle(e) {
    if (e.target.parentNode.children[4].checked) {
        if (e.target.tagName == 'BUTTON') {
            if(e.target.textContent == 'Show more') {
                Array.from(e.target.parentNode.children[9].children).map(x => {
                    x.style.display = 'block'
                });
                e.target.textContent = 'Hide it'
            }
            else if( e.target.textContent == 'Hide it') {
                Array.from(e.target.parentNode.children[9].children).map(x => {
                    x.style.display = 'none'
                });
                e.target.textContent = 'Show more'
            }
        }
    }
}