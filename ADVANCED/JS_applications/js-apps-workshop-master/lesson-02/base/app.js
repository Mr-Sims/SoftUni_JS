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

    recipeElement.addEventListener('click', recipeClickHandler.bind(null, recipe._id))
    // // warning XSS attack
    recipeElement.innerHTML = `
        <div class="title">
            <h2>${recipe.name} ${recipe._id}</h2>
        </div>
        <div class="small">
            <img src="${recipe.img}">
        </div>
    `
    return recipeElement
}

function recipeClickHandler(id, e) {
    fetch(`${baseUrl}/jsonstore/cookbook/details/${id}`)
        .then(res => res.json())
        .then(data => {
            


        })
        
        

}