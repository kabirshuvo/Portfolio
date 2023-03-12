const menuItems = document.querySelectorAll('.menu-item');
const menu = document.getElementById('menu');

menuItems.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    menu.dataset.activeIndex = index;
  });
});



