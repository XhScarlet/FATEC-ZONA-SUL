const officialVestibularUrl = "https://vestibular.fatec.sp.gov.br/home/";

const signupSteps = [
  { icon: "Web--Streamline-Plump-Remix.svg", text: "Acesse o Portal do Vestibular." },
  { icon: "map-pin.svg", text: "Escolha a Fatec Zona Sul." },
  { icon: "file-text.svg", text: "Selecione o curso desejado." },
  { icon: "list.svg", text: "Finalize sua inscrição e gere o comprovante." },
];

const faqRedirectUrl = "https://vestibular.fatec.sp.gov.br/duvidas-frequentes/";

const faqs = [
  {
    question: "Quem pode participar do vestibular?",
    answer: "Pode participar quem concluiu ou está concluindo o Ensino Médio, conforme as regras do edital vigente.",
  },
  {
    question: "Posso utilizar a nota do ENEM?",
    answer: "As regras de aproveitamento de nota são definidas no edital de cada processo seletivo.",
  },
  {
    question: "Como funciona a prova?",
    answer: "A prova segue o calendário oficial do Vestibular Fatec e avalia conhecimentos do Ensino Médio.",
  },
  {
    question: "Como funciona a matrícula?",
    answer: "Os convocados devem seguir as orientações e prazos publicados no site oficial do Vestibular Fatec.",
  },
  {
    question: "Existe taxa de inscrição?",
    answer: "Sim. O valor, isenções e reduções são informados no edital do processo seletivo.",
  },
  {
    question: "Onde encontro o edital?",
    answer: "O edital fica disponível no portal oficial do Vestibular Fatec.",
  },
];

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

function configureExternalLinks() {
  document.querySelectorAll(".vest-external, .official-link, .vest-final-link").forEach((link) => {
    link.href = officialVestibularUrl;
  });
}

function renderSignupSteps() {
  const grid = document.querySelector("#signup-steps");
  grid.innerHTML = signupSteps
    .map(
      (step) => `
        <article class="signup-card">
          <img src="assets/${step.icon}" alt="" />
          <p>${step.text}</p>
        </article>
      `
    )
    .join("");
}

function renderCourseCards() {
  const grid = document.querySelector("#vest-course-cards");
  grid.innerHTML = `
    <div class="vest-course-art">
      <img src="assets/cards cursos.svg" alt="Cursos da FATEC Zona Sul" />
      <button class="course-hotspot course-hotspot-1" type="button" aria-label="Curso Desenvolvimento de Software Multiplataforma"></button>
      <button class="course-hotspot course-hotspot-2" type="button" aria-label="Curso Análise e Desenvolvimento de Sistemas"></button>
      <button class="course-hotspot course-hotspot-3" type="button" aria-label="Curso Gestão Empresarial"></button>
      <button class="course-hotspot course-hotspot-4" type="button" aria-label="Curso Logística"></button>
    </div>
  `;
}

function renderFaq() {
  const grid = document.querySelector("#faq-grid");
  grid.innerHTML = faqs
    .map(
      (faq, index) => `
        <article class="faq-item">
          <a class="faq-question" href="${faqRedirectUrl}" target="_blank" rel="noopener noreferrer">
            <span>${faq.question}</span>
            <span class="faq-icon" aria-hidden="true">+</span>
          </a>
        </article>
      `
    )
    .join("");
}

setupMenu();
configureExternalLinks();
renderSignupSteps();
renderCourseCards();
renderFaq();
