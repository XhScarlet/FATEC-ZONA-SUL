# FATEC Zona Sul — Site Institucional

Site institucional da **FATEC Zona Sul**, desenvolvido como projeto da disciplina de Desenvolvimento Web III. O projeto utiliza um servidor próprio construído em **Node.js puro** (sem frameworks), servindo páginas HTML, CSS, JS e imagens de forma estática.

---

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) — versão **18 ou superior** recomendada

Para verificar se o Node.js já está instalado, abra o terminal e execute:

```bash
node -v
```

Se aparecer um número de versão (ex: `v20.11.0`), está pronto. Caso contrário, [baixe e instale o Node.js aqui](https://nodejs.org/).

---

## Como rodar o projeto

### 1. Clone ou baixe o repositório

**Via Git:**
```bash
git clone https://github.com/XhScarlet/FATEC-ZONA-SUL.git
```

**Ou baixe o ZIP** pelo GitHub e extraia na sua máquina.

---

### 2. Acesse a pasta do projeto

```bash
cd FATEC-ZONA-SUL
```

---

### 3. Inicie o servidor

```bash
node server.js
```

Se tudo estiver correto, você verá no terminal:

```
===============================================
---------------FATEC - ZONA SUL----------------
Servidor iniciado em http://localhost:2000....
===============================================
```

---

### 4. Acesse no navegador

Abra o seu navegador e acesse:

```
http://localhost:2000
```

---

### ⚠️ Encerrando o servidor

Para parar o servidor, volte ao terminal e pressione:

```
Ctrl + C
```

---

## Estrutura do projeto

```text
FATEC-ZONA-SUL/
│
├── public/                          # Interface visual e interação do sistema
│   ├── assets/                      # Imagens, ícones e outros recursos visuais
│   ├── css/                         # Arquivos de estilização CSS
│   ├── js/                          # Arquivos JavaScript e funcionalidades
│   ├── index.html                   # Página HTML — Home / Início
│   ├── curso.html                   # Página HTML — Cursos
│   ├── vestibular.html              # Página HTML — Vestibular
│   ├── infraestrutura.html          # Página HTML — Infraestrutura
│   ├── eventos.html                 # Página HTML — Eventos
│   ├── quem-somos.html              # Página HTML — Quem Somos
│   └── erro404.html                 # Página de erro para rotas não encontradas
│
├── Documentação.docx                # Documentação Técnica do Projeto
├── server.js                        # Servidor web em Node.js (sem frameworks)
└── README.md                        # Documentação do projeto
```

---

## 🛠️ Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- NodeJS

---

## Problemas comuns

**Erro: `EADDRINUSE: address already in use :::2000`**

A porta 2000 já está sendo usada por outra instância do servidor. Encerre o processo antigo antes de rodar novamente:

- **Windows (PowerShell):**
  ```powershell
  Stop-Process -Id (Get-NetTCPConnection -LocalPort 2000 | Select-Object -ExpandProperty OwningProcess) -Force
  ```

---

## 👥 Integrantes

### Frontend

- **Julia Milagres**
  - GitHub: [jmilagresdev](https://github.com/jmilagresdev)
  - Responsabilidade: Designer UX & UI | Frontend

- **Murilo Marcolino**
  - GitHub: [murilosilvsilva-jpg](https://github.com/murilosilvsilva-jpg)
  - Responsabilidade: Designer UX & UI | Frontend

### Backend

- **Gabriela Cardoso**
  - GitHub: [XhScarlet](https://github.com/XhScarlet)
  - Responsabilidade: Backend

- **João Paulo Vitalino**
  - GitHub: [JuaumPz](https://github.com/JuaumPz)
  - Responsabilidade: Backend

### Documentação

- **Yasmin Maria Etevilna**
  - GitHub: [Yasmin1Silva](https://github.com/Yasmin1Silva)
  - Responsabilidade: Documentação técnica

---

> Projeto desenvolvido para fins acadêmicos — FATEC Zona Sul 🎓
