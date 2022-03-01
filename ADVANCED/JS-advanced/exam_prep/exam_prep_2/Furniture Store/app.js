window.addEventListener('load', solve);

function solve() {
    let input = {
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price'),
    }
    let totalPrice = document.querySelector('.total-price')

    const furnitureList = document.getElementById('furniture-list')

    document.addEventListener('click', main);

    function main(ev) {
        ev.preventDefault()
        if (ev.target.textContent == 'Add') {
            addFurniture(ev);
        }
        if (ev.target.className == 'moreBtn') {
            info(ev);
        }
        if (ev.target.className == 'buyBtn') {
            buy(ev);
        }
    }

    function addFurniture(ev) {
        if (input.model.value != '' && input.description.value != '' && input.year.value != '' && input.year.value > 0 && input.price.value != '' && input.price.value > 0) {
            const model = input.model.value.trim();
            const year = input.year.value.trim();
            const description = input.description.value.trim();
            const price = Number(input.price.value.trim());
            
            let item = document.createElement('tr')
            item.className = 'info'


            item.innerHTML = `<td>${model}</td>
                            <td>${price.toFixed(2)}</td>
                            <td>
                                <button class="moreBtn">More Info</button>
                                <button class="buyBtn">Buy it</button>
                            </td>`
                            

            // let modelTd = document.createElement('td')
            // modelTd.textContent = model

            // let priceTd = document.createElement('td')
            // priceTd.textContent = price.toFixed(2)

            // let buttonsTd = document.createElement('td')
            // let infoBtn = document.createElement('button')
            // infoBtn.className = 'moreBtn'
            // infoBtn.textContent = 'More Info'

            // let buyBtn = document.createElement('button')
            // buyBtn.className = 'buyBtn'
            // buyBtn.textContent = 'Buy it'
            // buttonsTd.appendChild(infoBtn);
            // buttonsTd.appendChild(buyBtn);

            // item.appendChild(modelTd)
            // item.appendChild(priceTd)
            // item.appendChild(buttonsTd)

            furnitureList.appendChild(item)

            let itemHide = document.createElement('tr')
            itemHide.className = 'hide';
            itemHide.style.display = 'none'

            itemHide.innerHTML = `<td>Year:${year}</td>
            <td colspan="3">Description: ${description}</td>`

            // let yearTd = document.createElement('td')
            // yearTd.textContent = `Year: ${year}`
            // let descriptionTd = document.createElement('td')
            // descriptionTd.colSpan = '3'
            // descriptionTd.textContent = `Description: ${description}`
            // itemHide.appendChild(yearTd)
            // itemHide.appendChild(descriptionTd)
            furnitureList.appendChild(itemHide)

            for (let el in input) {
                input[el].value = ''
            }
        }
    }

    function info(ev) {
        let btn = ev.target
        let btnParent = ev.target.parentNode.parentNode
        let list = Array.from(furnitureList.children)
        let index = list.indexOf(btnParent)
        let hidden = list[index + 1]
        if (ev.target.textContent == 'More Info') {
            hidden.style.display = 'contents'
            btn.textContent = 'Less Info'
        }
        else if (ev.target.textContent == 'Less Info') {
            hidden.style.display = 'none'
            btn.textContent = 'More Info'
        }
    }

    function buy(ev) {
        let btnParent = ev.target.parentNode.parentNode
        let list = Array.from(furnitureList.children)
        let index = list.indexOf(btnParent)
        let hidden = list[index + 1]
        let price = Number(btnParent.children[1].textContent)
        let currentTotal = Number(totalPrice.textContent)
        totalPrice.textContent = (price + currentTotal).toFixed(2)
        furnitureList.removeChild(btnParent)
        furnitureList.removeChild(hidden)
    }
}