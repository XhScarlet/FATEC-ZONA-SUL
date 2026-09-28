const technologies = [
  {
    icon: "Web--Streamline-Plump-Remix.svg",
    title: "Web",
    text: "Desenvolvimento WEB moderno",
  },
  {
    icon: "smartphone.svg",
    title: "Mobile",
    text: "Aplicativos para diferentes plataformas",
  },
  {
    icon: "cloud.svg",
    title: "Cloud",
    text: "Computação em nuvem e infraestrutura",
  },
  {
    icon: "database.svg",
    title: "Banco de Dados",
    text: "Modelagem, SQL e soluções escaláveis",
  },
  {
    icon: "link.svg",
    title: "APIs",
    text: "Integração de sistema e serviços",
  },
  {
    icon: "wifi.svg",
    title: "IoT",
    text: "Soluções para dispositivos inteligentes",
  },
];

const semesters = [
  {
    label: "1° Semestre",
    disciplines: [
      "Modelagem de Banco de Dados",
      "Desenvolvimento Web I",
      "Algoritmos e Lógica de Programação",
      "Engenharia de Software I",
      "Design Digital",
      "Sistemas Operacionais e Redes de Computadores",
    ],
  },
  {
    label: "2° Semestre",
    disciplines: [
      "Banco de Dados Relacional",
      "Desenvolvimento Web II",
      "Técnicas de Programação",
      "Engenharia de Software II",
      "Interação Humano Computador",
      "Matemática para Computação",
    ],
  },
  {
    label: "3° Semestre",
    disciplines: [
      "Desenvolvimento Mobile I",
      "Estrutura de Dados",
      "Programação Orientada a Objetos",
      "APIs e Microsserviços",
      "Gestão Ágil de Projetos",
      "Inglês Instrumental",
    ],
  },
  {
    label: "4° Semestre",
    disciplines: [
      "Desenvolvimento Mobile II",
      "Computação em Nuvem",
      "Qualidade de Software",
      "Segurança da Informação",
      "Integração de Sistemas",
      "Projeto Multiplataforma I",
    ],
  },
  {
    label: "5° Semestre",
    disciplines: [
      "Internet das Coisas",
      "DevOps",
      "Arquitetura de Software",
      "Ciência de Dados Aplicada",
      "Empreendedorismo",
      "Projeto Multiplataforma II",
    ],
  },
  {
    label: "6° Semestre",
    disciplines: [
      "Projeto Integrador Final",
      "Governança de TI",
      "Tópicos Avançados em Software",
      "Experiência do Usuário",
      "Ética e Sociedade",
      "Trabalho de Graduação",
    ],
  },
];

const iconBase = "assets/";

function renderTechnologies() {
  const grid = document.querySelector("#tech-grid");
  grid.innerHTML = technologies
    .map(
      (item) => `
        <article class="tech-card">
          <img src="${iconBase}${item.icon}" alt="" />
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSemester(index) {
  const list = document.querySelector("#discipline-list");
  list.innerHTML = semesters[index].disciplines.map((discipline) => `<li>${discipline}</li>`).join("");

  document.querySelectorAll(".semester-tab").forEach((tab, tabIndex) => {
    const isActive = tabIndex === index;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function renderSemesterTabs() {
  const tabs = document.querySelector("#semester-tabs");
  tabs.innerHTML = semesters
    .map(
      (semester, index) => `
        <button class="semester-tab${index === 0 ? " is-active" : ""}" type="button" role="tab" aria-selected="${
        index === 0
      }" data-semester="${index}">
          ${semester.label}
        </button>
      `
    )
    .join("");

  tabs.addEventListener("click", (event) => {
    const button = event.target.closest(".semester-tab");
    if (!button) return;
    renderSemester(Number(button.dataset.semester));
  });

  renderSemester(0);
}

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

function setupCourseSwitcher() {
  const toggle = document.querySelector(".course-menu-toggle");
  const menu = document.querySelector("#course-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".course-switcher")) return;
    toggle.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  });
}

renderTechnologies();
renderSemesterTabs();
setupMenu();
setupCourseSwitcher();
