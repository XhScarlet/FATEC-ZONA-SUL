const courses = [
  {
    number: "01",
    title: "Desenvolvimento de Software e multiplataforma.",
    tags: ["WEB", "MOBILE", "IoT", "CLOUD"],
  },
  {
    number: "02",
    title: "Análise e desenvolvimento de sistemas.",
    tags: ["SOFTWARE", "DADOS", "REDES"],
  },
  {
    number: "03",
    title: "Gestão empresarial.",
    tags: ["GESTÃO", "ESTRATÉGIA", "NEGÓCIOS"],
  },
  {
    number: "04",
    title: "Logística.",
    tags: ["SUPPLY CHAIN", "OPERAÇÕES", "PROCESSOS"],
  },
];

const steps = [
  {
    icon: "file-text.svg",
    title: "Inscrição",
    text: "Preencha a ficha do processo seletivo.",
  },
  {
    icon: "Calendar-Warning--Streamline-Sharp-Neon.svg",
    title: "Prova",
    text: "Confira a data, local e horário.",
  },
  {
    icon: "list.svg",
    title: "Resultado",
    text: "Acompanhe a classificação.",
  },
  {
    icon: "Graduation-Cap--Streamline-Plump.svg",
    title: "Matrícula",
    text: "Envie a documentação solicitada.",
  },
];

const events = [
  {
    day: "29",
    month: "OUT",
    title: "Prazo final de trancamento de matrículas de cursos semestrais",
  },
  {
    day: "06",
    month: "NOV",
    title: "Semana tecnológica",
  },
  {
    day: "14",
    month: "DEZ",
    title: "Evento com alunos e novas ideias",
  },
];

const infrastructure = [
  {
    icon: "Computer--Streamline-Block-Free.svg",
    title: "Laboratórios equipados",
    text: "Ambientes para tecnologia e prática.",
  },
  {
    icon: "users-sala-de-aula.svg",
    title: "Salas de aula",
    text: "Espaços para colaboração.",
  },
  {
    icon: "book-open.svg",
    title: "Biblioteca",
    text: "Acervo de apoio acadêmico.",
  },
  {
    icon: "map-pin.svg",
    title: "Localização",
    text: "Zona Sul de São Paulo.",
  },
];

const iconPath = "assets/icons/";

function renderCourses() {
  const grid = document.querySelector("#course-grid");
  grid.innerHTML = courses
    .map(
      (course) => `
        <article class="course-card">
          <span class="course-number">${course.number}</span>
          <h3>${course.title}</h3>
          <div class="tag-row">
            ${course.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div>
            <span class="card-divider" aria-hidden="true"></span>
            <div class="course-meta">
              <span><img src="${iconPath}RELOGIO.svg" alt="" />Manhã/Noite</span>
              <span><img src="${iconPath}Calendar-Warning--Streamline-Sharp-Neon.svg" alt="" />06 Semestres</span>
              <img class="arrow-icon" src="assets/seta-elipse.svg" alt="" />
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSteps() {
  const grid = document.querySelector("#steps-grid");
  grid.innerHTML = steps
    .map(
      (step, index) => `
        <article class="step-card">
          <div class="step-icon">
            <img src="${iconPath}${step.icon}" alt="" />
            <span class="step-index">${String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </article>
      `
    )
    .join("");
}

function renderEvents() {
  const list = document.querySelector("#event-list");
  list.innerHTML = events
    .map(
      (event) => `
        <article class="event-card">
          <div class="event-date">
            <strong>${event.day}</strong>
            <span>${event.month}</span>
          </div>
          <h3>${event.title}</h3>
          <img src="assets/seta-elipse-red.svg" alt="" />
        </article>
      `
    )
    .join("");
}

function renderInfrastructure() {
  const grid = document.querySelector("#infra-grid");
  grid.innerHTML = infrastructure
    .map(
      (item) => `
        <article class="infra-card">
          <img src="${iconPath}${item.icon}" alt="" />
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `
    )
    .join("");
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

renderCourses();
renderSteps();
renderEvents();
renderInfrastructure();
setupMenu();
