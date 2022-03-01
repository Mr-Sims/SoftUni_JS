function toggle() {
    const button = document.querySelector('.button');
    button.textContent = button.textContent == 'More' ? 'Less' : 'More';

    const text = document.getElementById('extra');
    text.style.display = text.style.display == 'block' ? 'none' : 'block';
    
}