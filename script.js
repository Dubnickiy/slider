const track = document.querySelector('.track')
const nextBtn = document.querySelector('.right')
const prevBtn = document.querySelector('.left')
const navigation = document.querySelector('.navigation')
const slides = document.querySelectorAll('.slide')
const slideBtns = document.querySelectorAll('.slide-btn')

let currentSlide = 0
let shift = 0

nextBtn.onclick = slideNext
prevBtn.onclick = slidePrev

slideBtns.forEach((slideBtn, i) => slideBtn.onclick = () => slideTo(i))
// slideBtns[0].onclick = () => slideTo(0)
// slideBtns[1].onclick = () => slideTo(1)
// slideBtns[2].onclick = () => slideTo(2)
// slideBtns[3].onclick = () => slideTo(3)
// slideBtns[4].onclick = () => slideTo(4)
// slideBtns[5].onclick = () => slideTo(5)

// setInterval(slideNext, 2500)

function slideNext() {
  if (currentSlide == 5) {
    track.append(track.children[0])
    currentSlide--
    shift--
    if (shift < 0) {
      shift += 6
    }
    track.scrollLeft = currentSlide * 310
  }
  currentSlide++
  track.scrollTo({ left:  currentSlide * 310, behavior: 'smooth' })
}

function slidePrev() {
  if (currentSlide == 0) {
    track.prepend(track.children[track.children.length - 1])
    currentSlide++
    shift++
    track.scrollLeft = currentSlide * 310
  }
  currentSlide--
  track.scrollTo({ left: currentSlide * 310, behavior: 'smooth' })
}

function slideTo(i) {
  if (shift) {
    track.append(...slides)
    slideToQuick((currentSlide + 6 - shift) % 6) 
    shift = 0
  }
  track.scrollTo({ left: i * 310, behavior: 'smooth' })
  currentSlide = i
} 

function slideToQuick(i) {
  track.scrollTo({ left: i * 310})
  currentSlide = i
} 
