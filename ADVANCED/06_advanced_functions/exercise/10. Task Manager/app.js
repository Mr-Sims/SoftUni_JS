function solve() {
    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dateInput = document.getElementById('date');

    const sections = document.querySelectorAll('section');
    const openSection = sections[1];
    const inProgressSection = document.getElementById('in-progress').parentNode;
    const completeSection = sections[3];

    document.addEventListener('click', main);

    function main(ev) {
        if (ev.target.textContent == 'Add') {
            addArticle(ev);
        }

        if (ev.target.textContent == 'Start') {
            startArticle(ev);
        }

        if (ev.target.textContent == 'Delete') {
            deleteArticle(ev);
        }

        if (ev.target.textContent == 'Finish') {
            finishArticle(ev);
        }
    }


    function addArticle(ev) {

        if (taskInput.value.length > 0 && descriptionInput.value.length > 0 && dateInput.value.length > 0) {

            let task = document.createElement('h3');
            task.textContent = taskInput.value;

            let description = document.createElement('p')
            description.textContent = `Description: ${descriptionInput.value}`;

            let date = document.createElement('p');
            date.textContent = `Due Date: ${dateInput.value}`;

            let btnDiv = document.createElement('div');
            btnDiv.classList.add('flex');

            let startBTN = document.createElement('button');
            startBTN.classList.add('green');
            startBTN.textContent = 'Start';

            let deleteBTN = document.createElement('button');
            deleteBTN.classList.add('red');
            deleteBTN.textContent = 'Delete';

            btnDiv.appendChild(startBTN);
            btnDiv.appendChild(deleteBTN);

            let article = document.createElement('article');
            article.appendChild(task);
            article.appendChild(description);
            article.appendChild(date);
            article.appendChild(btnDiv);

            openSection.children[1].appendChild(article);
            ev.preventDefault();

            taskInput.value = '';
            descriptionInput.value = '';
            dateInput.value = '';
        } else {
            ev.preventDefault();
        }
    }

    function startArticle(ev) {
        let article = ev.target.parentNode.parentNode;
        openSection.children[1].removeChild(article);

        let startBTN = article.querySelector('.green');
        let btnDiv = startBTN.parentNode;
        btnDiv.removeChild(startBTN);

        let finishBTN = document.createElement('button');
        finishBTN.classList.add('orange');
        finishBTN.textContent = 'Finish';
        btnDiv.appendChild(finishBTN);
        inProgressSection.children[1].appendChild(article);
        ev.preventDefault();
    }

    function deleteArticle(ev) {
        let article = ev.target.parentNode.parentNode;
        let container = ev.target.parentNode.parentNode.parentNode;
        container.removeChild(article);
        ev.preventDefault();
    }

    function finishArticle(ev) {
        let article = ev.target.parentNode.parentNode;
        inProgressSection.children[1].removeChild(article);
        let btnDIV = ev.target.parentNode;
        article.removeChild(btnDIV);
        completeSection.children[1].appendChild(article);
        ev.preventDefault();
    }
}