const baseUrl = 'http://localhost:3030'

window.addEventListener('load', () => {
    fetch(`${baseUrl}/jsonstore/cookbook/recipes`)
        .then(res => res.json())
        .then(recipes => {
            renderRecipes(Object.values(recipes));
        })
})

function renderRecipes(recipes) {
    const mainElement = document.querySelector('main');
    mainElement.replaceChildren()

    recipes.forEach(x => {
        mainElement.appendChild(createRecipe(x))
    })
}

function createRecipe(recipe) {
    let recipeElement = document.createElement('article')
    recipeElement.classList.add('preview')

    recipeElement.addEventListener('click', recipeClickHandler.bind(null, recipe))
    // // warning XSS attack
    recipeElement.innerHTML = `
        <div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small">
            <img src="${recipe.img}">
        </div>
    `
    return recipeElement
}

function recipeClickHandler(recipe, e) {
    fetch(`${baseUrl}/jsonstore/cookbook/details/${recipe._id}`)
        .then(res => res.json())
        .then(data => {
            const mainElement = document.querySelector('main');
            mainElement.replaceChildren()

            let recipeElement = document.createElement('article')
            recipeElement.classList.add('preview')
            recipeElement.innerHTML = `
        <div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small">
            <img src="${recipe.img}">
        </div>
            `
            let recipeDescription = document.createElement('article')
            recipeDescription.innerHTML = `
            <h2>${recipe.name}</h2>
            <div class="band">
                <div class="thumb">
                    <img src="${recipe.img}">
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                       
                    ${renderElements('li', data.ingredients)}

                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                ${renderElements('p', data.steps)}
            </div>`

            mainElement.appendChild(recipeElement)
            mainElement.appendChild(recipeDescription)
        })
}

function renderElements(type, elements) {
    let arr = []
    elements.forEach(el => {
        arr.push(`<${type}>${el}</${type}>`)
    })
    return arr.join(`\n`)
}
