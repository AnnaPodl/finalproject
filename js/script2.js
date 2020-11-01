var
    burger = document.getElementById('burger'),
    menu = document.getElementById('nav');

burger.addEventListener('click', function () {
    if (burger.classList.contains('burger_active'))
        closeMenu();
    else openMenu();
}, false);

function openMenu() {
    burger.classList.add('burger_active');
    menu.classList.add('open-menu')
    document.body.classList.add('fixed-page');
}
function closeMenu() {
    burger.classList.remove('burger_active');
    menu.classList.remove('open-menu');
    document.body.classList.remove('fixed-page');
}