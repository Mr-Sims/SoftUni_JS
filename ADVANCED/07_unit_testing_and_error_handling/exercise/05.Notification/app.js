function notify(message) {
  
  const notification = document.querySelector('#notification')
  notification.innerHTML = message
  notification.style.display = 'block'

  notification.addEventListener('click', hide);

  function hide(ev) {
    ev.target.style.display = 'none'
  }
  
}