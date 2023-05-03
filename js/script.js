const animateGambar = document.querySelector('aside img')

animateGambar.addEventListener('mouseenter', () => {
  animateGambar.style.transform = "scale(1.2)"
  animateGambar.style.transition= "0.2s"
  animateGambar.style.padding = "20px"
})

animateGambar.addEventListener('mouseleave', () => {
  animateGambar.style.transform = "scale(1)"
  animateGambar.style.transition= "0.4s"
  animateGambar.style.padding = "20px"
})

