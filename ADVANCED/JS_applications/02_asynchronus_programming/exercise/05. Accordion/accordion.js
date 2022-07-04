async function solution() {
    const main = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    let detailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/';

    data.forEach(a => {
        let divAccordion = createElement('div', '', ['class', 'accordion']);
        let divHead = createElement('div', '', ['class', 'head']);
        let span = createElement('span', a.title, []);
        let btn = createElement('button', 'MORE', ['id', a._id, 'class', 'button']);
        let divExtra = createElement('div', '', ['class', 'extra']);

        btn.addEventListener('click', toggle);

        let p = createElement('p', '', []);
        
        divHead.appendChild(span);
        divHead.appendChild(btn);
        
        divExtra.appendChild(p);

        divAccordion.appendChild(divHead);
        divAccordion.appendChild(divExtra);
        main.appendChild(divAccordion);
    });

    async function toggle(ev) {

        let pDiv = ev.target.parentNode.parentNode.lastChild;
        let p = pDiv.firstChild;

        if (p.textContent == '') {
            const id = ev.target.id;
            const response = await fetch(detailsUrl + id);
            const pData = await(response.json());
            p.textContent = pData.content;
        }

        if (ev.target.textContent == 'MORE') {
            
            pDiv.style.display = 'inline';
            ev.target.textContent = 'LESS';
        }
        else if (ev.target.textContent == 'LESS') {
            pDiv.style.display = 'none';
            ev.target.textContent = 'MORE';
        }
    }

    function createElement(type, content, attrs = []) {
        const element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }
        if (attrs.length > 0) {
            for(let i = 0; i < attrs.length; i += 2) {
                element.setAttribute(attrs[i], attrs[i+1]);
            }
        }
        return element
    }

}

solution()