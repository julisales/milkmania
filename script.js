document.getElementById('btn-open').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.add('open-menu'); 
});


document.getElementById('btn-close').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.remove('open-menu'); 
});

const links = document.getElementsByClassName('link-menu');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        document.getElementById('menu-mobile').classList.remove('open-menu');
    });
}