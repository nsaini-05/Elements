const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

function blurrring () {
  load++
  if (load > 99) {
    clearInterval(int)
  }
  loadText.innerHTML = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

let int = setInterval(blurrring, 20)
