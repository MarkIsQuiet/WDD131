 
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
// - - - - - - - - - -
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');



// Event listeners
gallery.addEventListener('click', openModal);
btn .addEventListener('click', toggleMenu);

function openModal(e) {
    
    // Code to show modal  - Use event parameter 'e'   
    console.log(e.target); // Which image was clicked
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('small', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

function toggleMenu () {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}