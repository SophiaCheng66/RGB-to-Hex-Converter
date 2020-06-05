const redChange = document.querySelector('#redRange')
const greenChange = document.querySelector('#greenRange')
const blueChange = document.querySelector('#blueRange')
const hexColorCode = document.querySelector('#hexColor')

function rgbToHex() {
  let redValue = Number(redChange.value).toString(16)
  let greenValue = Number(greenChange.value).toString(16)
  let blueValue = Number(blueChange.value).toString(16)
  return hexColorCode.innerHTML = `
   #${redValue.padStart(2, '0')}${greenValue.padStart(2, '0')}${blueValue.padStart(2, '0')}
`
}

function bgColor() {
  return document.body.style.backgroundColor = hexColorCode.innerHTML
}

function red(event) {
  let red = document.querySelector('.redStyle2')
  let color = event.target.value
  red.innerHTML = `${color}`
  rgbToHex()
  bgColor()
}

function green(event) {
  let red = document.querySelector('.greenStyle2')
  let color = event.target.value
  red.innerHTML = `${color}`
  rgbToHex()
  bgColor()
}

function blue(event) {
  let red = document.querySelector('.blueStyle2')
  let color = event.target.value
  red.innerHTML = `${color}`
  rgbToHex()
  bgColor()
}

redChange.addEventListener('click', red)
greenChange.addEventListener('click', green)
blueChange.addEventListener('click', blue)



