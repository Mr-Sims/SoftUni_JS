function loadCommits() {
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`
    let resultContainer = document.getElementById('commits')
    resultContainer.replaceChildren()
    fetch(url)
        .then(res => {
            if (res.ok == false) {
                throw new Error(`${response.status}: ${response.statusText}`)
            }
            return res.json();
        }) 
        .then(data => {
            
            data.forEach(x => {
                console.log(x.commit.author.name)
                console.log(x.commit.message)
                const li = document.createElement('li')
                li.textContent = `${x.commit.author.name}: ${x.commit.message}`
                resultContainer.appendChild(li)
            })
        })
        .catch(err => resultContainer.textContent = err)
}