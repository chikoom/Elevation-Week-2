
const toggleNav = () => {
  menuButton = document.getElementById('nav-button')
  menuWrapper = document.getElementById('nav-bar-wrapper')

  if(menuButton.classList.contains('active')){
    menuButton.classList.remove('active')
    menuButton.style.color = '#333'
    menuWrapper.style.display = 'none'
  } else {
    menuButton.classList.add('active')
    menuButton.style.color = '#fff'
    menuWrapper.style.display = 'grid'
  }
  
}

document.getElementById('nav-button').addEventListener('click', toggleNav)