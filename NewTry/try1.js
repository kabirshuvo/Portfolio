const menu = document.getElementById("menu");
const menuItems = Array.from(document.getElementsByClassName("menu-item"));

menuItems.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    menu.dataset.activeIndex = index;
  });
});