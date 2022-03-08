function getInfo() {
    
        let input = document.getElementById('stopId')
        const submitBtn = document.getElementById('submit')
        let resultStopName = document.getElementById('stopName')
        let resultBuses = document.getElementById('buses')

        const baseUrl = `http://localhost:3030/jsonstore/bus/businfo/`
        resultStopName.textContent = 'Loading'

        submitBtn.addEventListener('click', () => {
            resultBuses.replaceChildren()

            let busId = Number(input.value)
            fetch(`${baseUrl}${busId}`)
                .then(response => {
                    if(response.ok == false) {
                        throw new Error(`${response.status}: ${response.statusText}`)
                    }
                    return response.json()
                })
                .then(data => {
                    resultBuses.innerHTML = ''
                    resultStopName.textContent = data.name
                    Object.entries(data.buses)
                        .forEach((bus, minutes) => {
                            let li = document.createElement('li')
                            li.textContent = `Bus ${bus} arrives in ${minutes}`
                            resultBuses.appendChild(li)
                        })
                })
                .catch(err => resultStopName.textContent =err)
        })
}