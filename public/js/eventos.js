const eventFilters = [
  { label: "Todos", value: "todos" },
  { label: "Internos", value: "interno" },
  { label: "Externos", value: "externo" },
  { label: "Palestras", value: "palestra" },
  { label: "Semana Acadêmica", value: "semana" },
];

const featuredEvents = [
  {
    day: "26",
    month: "OUT",
    category: "Evento",
    title: "FETEPS",
    description: "A maior feira de tecnologia do Centro Paula Souza, com projetos, inovação, startups e conhecimento.",
    bgPosition: "0 top",
  },
  {
    day: "16",
    month: "NOV",
    category: "Evento Acadêmico",
    title: "Semana da Tecnologia",
    description: "Palestras, oficinas e apresentações acadêmicas para aproximar estudantes do mercado de tecnologia.",
    bgPosition: "-298px top",
  },
  {
    day: "23",
    month: "SET",
    category: "Evento Externo",
    title: "Google Cloud Summit Brasil 2026",
    description: "Sugestão externa para estudantes acompanharem tendências de cloud, dados e inteligência artificial.",
    bgPosition: "-596px top",
  },
];

const agendaEvents = [
  {
    day: "24",
    month: "OUT",
    title: "DevFest 2026",
    category: "externo",
    type: "Evento Externo",
    time: "09h às 18h",
    local: "São Paulo - SP",
    description: "Encontro de tecnologia e comunidade para estudantes acompanharem tendências do mercado.",
    link: "",
  },
  {
    day: "09",
    month: "OUT",
    title: "Brasil Game Show (BGS) 2026",
    category: "externo",
    type: "Evento Externo",
    time: "13h às 21h",
    local: "São Paulo - SP",
    description: "Sugestão externa para estudantes interessados em games, tecnologia e entretenimento digital.",
    link: "",
  },
  {
    day: "06",
    month: "OUT",
    title: "Futurecom 2026",
    category: "palestra",
    type: "Evento Externo",
    time: "10h às 20h",
    local: "São Paulo - SP",
    description: "Evento externo sobre conectividade, inovação, infraestrutura digital e negócios.",
    link: "",
  },
  {
    day: "16",
    month: "NOV",
    title: "Semana da Tecnologia da Fatec Zona Sul",
    category: "semana",
    type: "Evento Acadêmico",
    time: "19h às 22h",
    local: "FATEC Zona Sul",
    description: "Programação interna com palestras, oficinas e apresentações acadêmicas.",
    link: "",
  },
];

let activeFilter = "todos";

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

function renderFeaturedEvents() {
  const grid = document.querySelector("#featured-events");
  grid.innerHTML = `
    <div class="featured-events-art">
      <img src="assets/cards eventos.svg" alt="Eventos em destaque: FETEPS, Semana da Tecnologia e Google Cloud Summit Brasil 2026" />
      <button class="featured-hotspot featured-hotspot-1" type="button" aria-label="Abrir FETEPS"></button>
      <button class="featured-hotspot featured-hotspot-2" type="button" aria-label="Abrir Semana da Tecnologia"></button>
      <button class="featured-hotspot featured-hotspot-3" type="button" aria-label="Abrir Google Cloud Summit Brasil 2026"></button>
    </div>
  `;
}

function renderFilters() {
  const filters = document.querySelector("#event-filters");
  filters.innerHTML = eventFilters
    .map(
      (filter) => `
        <button class="filter-button${filter.value === activeFilter ? " is-active" : ""}" type="button" data-filter="${filter.value}">
          ${filter.label}
        </button>
      `
    )
    .join("");

  filters.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-button");
    if (!button) return;
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("is-active", item === button));
    renderAgenda();
  });
}

function matchesFilter(event) {
  if (activeFilter === "todos") return true;
  if (activeFilter === "interno") return event.local.includes("FATEC");
  if (activeFilter === "externo") return event.category === "externo" || event.type.includes("Externo");
  return event.category === activeFilter;
}

function renderAgenda() {
  const list = document.querySelector("#agenda-list");
  list.innerHTML = `
    <div class="horizons-events-art">
      <img src="assets/cards horizontes.svg" alt="Eventos externos: DevFest 2026, Brasil Game Show e Futurecom 2026" />
      <button class="horizons-hotspot horizons-hotspot-1" type="button" data-message="URL de DevFest 2026 ainda não configurada." aria-label="URL de DevFest 2026 ainda não configurada"></button>
      <button class="horizons-hotspot horizons-hotspot-2" type="button" data-message="URL de Brasil Game Show ainda não configurada." aria-label="URL de Brasil Game Show ainda não configurada"></button>
      <button class="horizons-hotspot horizons-hotspot-3" type="button" data-message="URL de Futurecom 2026 ainda não configurada." aria-label="URL de Futurecom 2026 ainda não configurada"></button>
    </div>
  `;
}

function setupPendingLinkMessages() {
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("[data-message], #all-events-link");
    if (!button) return;
    const feedback = document.querySelector("#events-feedback");
    feedback.textContent = button.dataset.message || "Link externo de eventos em São Paulo ainda não configurado.";
  });
}

setupMenu();
renderFeaturedEvents();
renderFilters();
renderAgenda();
setupPendingLinkMessages();
