function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#primary-menu");
  const links = menu.querySelectorAll("a");

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.classList.toggle("is-open", !isOpen);
    menu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.classList.remove("is-open");
      menu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

setupMenu();
