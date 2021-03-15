document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav-list");
  const burgerIcon = document.querySelector(".fa-bars");
  const xIcon = document.querySelector(".fa-times");
  const navLinks = document.querySelectorAll(".nav-link");
  const navDesktop = document.querySelector(".desktop");

  const toggleNavMenu = () => {
    navList.classList.toggle("active");
    if (navList.classList.contains("active")) {
      burgerIcon.classList.remove("show");
      xIcon.classList.add("show");
    } else {
      burgerIcon.classList.add("show");
      xIcon.classList.remove("show");
    }
  };

  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      navList.classList.remove("active");
      burgerIcon.classList.toggle("show");
      xIcon.classList.toggle("show");
    })
  );

  const changeNavColor = () => {
    if (window.scrollY >= 200) {
      navDesktop.classList.add("red-bg");
    } else {
      navDesktop.classList.remove("red-bg");
    }
  };

  window.addEventListener("scroll", changeNavColor);
  burger.addEventListener("click", toggleNavMenu);
});
