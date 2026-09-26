
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        logo.setAttribute('src', 'media/images/byui-logo-white.png');
        document.getElementById('content').style.border = '1px solid white';
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        logo.setAttribute('src', 'media/images/byui-logo-blue.webp');
        document.getElementById('content').style.border = '1px solid black';
    }
}           
                    