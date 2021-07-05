let prevButton = document.querySelector('button.prev-button')
let nextButton = document.querySelector('button.next-button')
let carouselWindowWidth = document.querySelector('.carousel-window').clientWidth
let carouselWrapper = document.querySelector('.carousel-wrapper')
let carouselItemsLength = document.querySelectorAll('.carousel-item').length
let position = 1
let currentTransition = 0

function handleNavigationClick(direction) {
  if(direction == "prev") {
    if(position == 1) return
    carouselWrapper.setAttribute('style',`transform: translateX(${currentTransition + carouselWindowWidth}px)`)
    currentTransition = currentTransition + carouselWindowWidth
    position--
  } else {
    if(position == carouselItemsLength) return
    carouselWrapper.setAttribute('style',`transform: translateX(${currentTransition - carouselWindowWidth}px)`)
    currentTransition = currentTransition - carouselWindowWidth
    position++
  }
}

prevButton.addEventListener('click', () => {
  handleNavigationClick("prev")
})

nextButton.addEventListener('click', () => {
  handleNavigationClick("next")
})
