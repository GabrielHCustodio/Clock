const handHours = document.querySelector('[handHours]')
const handMinutes = document.querySelector('[handMinutes]')
const handSeconds = document.querySelector('[handSeconds]')

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360)
}


const setClock = () => {
    const currentDate = new Date();

    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

    setRotation(handSeconds, secondsPercentage)
    setRotation(handMinutes, minutesPercentage)
    setRotation(handHours, hoursPercentage)
}

setClock()

setInterval(setClock, 1000)