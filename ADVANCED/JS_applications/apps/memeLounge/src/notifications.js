let notification = document.querySelector('#errorBox');
let span = notification.querySelector('span');

export function notifications(msg) {

    span.textContent = msg
    notification.style.display = 'inline'

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}