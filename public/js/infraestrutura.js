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

function setupGalleryLightbox() {
  const lightbox = document.querySelector("#infra-lightbox");
  const lightboxImage = lightbox.querySelector("img");
  const lightboxTitle = lightbox.querySelector("figcaption");
  const closeButton = lightbox.querySelector(".lightbox-close");

  function open(card) {
    lightboxImage.src = card.dataset.image;
    lightboxImage.alt = card.querySelector("img").alt;
    lightboxTitle.textContent = card.dataset.title;
    lightbox.hidden = false;
    closeButton.focus();
  }

  function close() {
    lightbox.hidden = true;
  }

  document.querySelectorAll(".campus-card").forEach((card) => {
    card.addEventListener("click", () => open(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(card);
      }
    });
  });

  closeButton.addEventListener("click", close);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) close();
  });
}

setupMenu();
setupGalleryLightbox();
