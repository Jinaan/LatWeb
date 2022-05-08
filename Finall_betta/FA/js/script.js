const navbarIcon = document.querySelector("#navbar-icon");
navbarIcon.addEventListener("click", function () {
  const navbarGroup = document.querySelector("#navbar-group");
  navbarGroup.classList.toggle("navbar-group--close");
});

const navbarItems = document.querySelectorAll("#navbar-group li");

for (const item of navbarItems) {
  item.addEventListener("click", function () {
    const navbarGroup = document.querySelector("#navbar-group");
    navbarGroup.classList.add("navbar-group--close");
  });
}
