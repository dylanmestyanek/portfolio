const icons = document.querySelectorAll('#nav ul li');

icons.forEach(icon => icon.addEventListener('click', () => {
    console.dir(icon.firstChild)
}))