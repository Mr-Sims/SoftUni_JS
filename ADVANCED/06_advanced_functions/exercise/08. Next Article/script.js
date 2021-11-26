function getArticleGenerator(articles) {

    const articlesList = articles

    function next() {
        const div = document.querySelector('#content')
        const article = document.createElement('article')
        if (articlesList.length > 0) {
            article.textContent = articlesList.shift()
            div.appendChild(article)
        }
    }
    return next

}
