document.querySelector('.drop-btn').addEventListener('click', () => {
    let dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});