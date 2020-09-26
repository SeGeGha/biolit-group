const [headerMenuBtn, footerMenuBtn] = document.querySelectorAll('.navigation-btn');

function showMenu({
  currentTarget: menuBtn,
}) {
  menuBtn.closest('.navigation-menu').classList.toggle('navigation--actived');
}

headerMenuBtn.addEventListener('click', showMenu);

footerMenuBtn.addEventListener('click', showMenu);
