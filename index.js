const items = document.querySelectorAll('.section3-container .text-section3')
const nbItems = items.length

const prev = document.querySelector('.left-arrow')
const next = document.querySelector('.right-arrow')
let count = 0

const nextSlide = () => {
  items[count].classList.remove('active')

  if (count < nbItems - 1) {
    count++
  } else {
    count = 0
  }
  items[count].classList.add('active')
}

const prevSlide = () => {
  items[count].classList.remove('active')

  if (count > 0) {
    count--
  } else {
    count = nbItems - 1
  }
  items[count].classList.add('active')
}

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)
