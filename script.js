let form = document.getElementById('form')
let remove = document.getElementById('remove')
let timerDisplay = document.getElementById('timer')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    saveData()
})

remove.addEventListener('click', function () {
    if (localStorage.getItem('userData')) {
        removeData()
    } else {
        alert('Non hai inserito nessun dato')
    }
})

function saveData() {
    let name = document.getElementById('name').value

    if (name.trim() !== '') {
        let userData = {
            name: name
        }

        localStorage.setItem('userData', JSON.stringify(userData))
        displayData()
    }
}

function removeData() {
    localStorage.removeItem('userData')
    displayData()
}

function displayData() {
    let divDisplay = document.getElementById('memoryData')
    let stringData = localStorage.getItem('userData')

    if (stringData) {
        let finalData = JSON.parse(stringData)
        divDisplay.textContent = finalData.name
    } else {
        divDisplay.textContent = ''
    }
}

function timer () {
    let time = sessionStorage.getItem('timer')
    
    if (time === null || time === undefined || isNaN(time)) {
        time = "0"
    }

    let timeValue = parseInt(time, 10)
    timeValue++

    sessionStorage.setItem('timer', timeValue)
    timerDisplay.textContent = timeValue
}

setInterval(timer, 1000)