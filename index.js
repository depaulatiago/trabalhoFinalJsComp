let select = document.getElementById("select")
let spans = document.querySelectorAll("spans")

function jsonData(url) {
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}


async function getApi() {
    const data = await jsonData('https://api.covid19api.com/summary')

    fillSelect(data.countries)
}

getApi()

function fillSelect(data) {
    let select = document.getElementById("select")

    data.map(item => {
        let option = document.createElement('option')
        option.textContent = item.Country
        select.appendChild(option)
    })
    spans[0].textContent = data[0].NewConfirmed
    spans[1].textContent = data[0].NewDeaths
    spans[2].textContent = data[0].NewRecovered
    spans[3].textContent = data[0].TotalCofirmed
    spans[4].textContent = data[0].TotalDeaths
    spans[5].textContent = data[0].TotalRecovered

    spans.forEach( item => {
        spans.style.color = 'green'
    })

    handleSelectChange(data)
}

function handleSelectChange(data){

    let findData = data.find(item => item.Country === select.value)

    select.addEventListener('change', () => {
        let findData = data.find(item => item.Country === select.value)

        spans[0].textContent = findData.NewConfirmed
        spans[1].textContent = findData.NewDeaths
        spans[2].textContent = findData.NewRecovered
        spans[3].textContent = findData.TotalCofirmed
        spans[4].textContent = findData.TotalDeaths
        spans[5].textContent = findData.TotalRecovered
        })
}