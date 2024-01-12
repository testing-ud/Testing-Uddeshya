// Responsive Sidenav
const sideNav = document.getElementById("sidenav");
const burgerMenu = document.getElementById("burgermenu");

burgerMenu.addEventListener("click", function () {
	sideNav.classList.toggle("active");
	burgerMenu.classList.toggle("active");
});
