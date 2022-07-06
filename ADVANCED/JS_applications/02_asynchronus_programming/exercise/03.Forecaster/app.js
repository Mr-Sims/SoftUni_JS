async function attachEvents() {

    const iconMapper = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }

    const searchBtn = document.getElementById('submit');

    const locationUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
    const res = await fetch(locationUrl);
    const data = await res.json();

    searchBtn.addEventListener('click', search)

    async function search() {

        try {
            const inputCity = document.getElementById('location');
            const currentUrl = 'http://localhost:3030/jsonstore/forecaster/today/'
            const upcomingUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/'
            let code = '';
            data.forEach(c => {
                if (c.name === inputCity.value) {
                    code = c.code
                }
            })

            inputCity.value = ''

            // // today forecast!!! ///
            const currentRes = await fetch(currentUrl + code);
            const currentData = await currentRes.json();

            let divForecast = document.getElementById('forecast')
            divForecast.style.display = 'block'

            let divCurrent = document.getElementById('current')
            divCurrent.innerHTML = ''
            let divLabel = createElement('div', 'Current conditions', ['class', 'label'])
            divCurrent.appendChild(divLabel)

            const divCurrentForecast = createElement('div', '', ['class', 'forecasts'])

            let spanIconElement = createElement('span', ``, ['class', 'condition symbol'])
            spanIconElement.innerHTML = iconMapper[currentData.forecast.condition]

            let spanContainerElement = createElement('span', '', ['class', 'condition'])

            let spanCity = createElement('span', currentData.name, ['class', 'forecast-data'])
            let spanTemp = createElement('span', '', ['class', 'forecast-data'])
            spanTemp.innerHTML = `${currentData.forecast.low}${iconMapper.Degrees}/${currentData.forecast.high}${iconMapper.Degrees}`
            let spanConditions = createElement('span', currentData.forecast.condition, ['class', 'forecast-data'])

            spanContainerElement.appendChild(spanCity)
            spanContainerElement.appendChild(spanTemp)
            spanContainerElement.appendChild(spanConditions)

            divCurrentForecast.appendChild(spanIconElement)
            divCurrentForecast.appendChild(spanContainerElement)

            divCurrent.appendChild(divCurrentForecast)

            //  //  three day forecast!!! //
            const upcomingRes = await fetch(upcomingUrl + code);
            const upcomingData = await upcomingRes.json()

            let divUpcoming = document.getElementById('upcoming')
            divUpcoming.innerHTML = ''
            let divLabel2 = createElement('div', 'Three-day forecast', ['class', 'label']);
            divUpcoming.appendChild(divLabel2)
            console.log(upcomingData.forecast);

            let divUpcomingContainer = createElement('div', '', ['class', 'forecast-info'])

            upcomingData.forecast.forEach(d => {
                console.log(d.condition);
                console.log(d.high);
                console.log(d.low);

                let spanContainerElementUpcoming = createElement('span', '', ['class', 'upcoming'])

                let spanSymbol = createElement('span', '', ['class', 'symbol'])
                spanSymbol.innerHTML = iconMapper[d.condition]

                let spanUpcomingTemp = createElement('span', '', ['class', 'forecast-data'])
                spanUpcomingTemp.innerHTML = `${d.low}${iconMapper.Degrees}/${d.high}${iconMapper.Degrees}`

                let spanUpcomingCondition = createElement('span', d.condition, ['class', 'forecast-data'])

                spanContainerElementUpcoming.appendChild(spanSymbol)
                spanContainerElementUpcoming.appendChild(spanUpcomingTemp)
                spanContainerElementUpcoming.appendChild(spanUpcomingCondition)

                divUpcomingContainer.appendChild(spanContainerElementUpcoming)
            })

            divUpcoming.appendChild(divUpcomingContainer)
        } catch {
            alert('No such city in database')
        }
    }

    function createElement(type, content, attrs = []) {
        const element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }
        if (attrs.length > 0) {
            for (let i = 0; i < attrs.length; i += 2) {
                element.setAttribute(attrs[i], attrs[i + 1]);
            }
        }
        return element
    }
}

attachEvents();