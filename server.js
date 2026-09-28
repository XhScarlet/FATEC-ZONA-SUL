/* ----------------------------------------------------------------------
  FATEC - ZONA SUL - PROJETO WEB
  Nomes: Gabriela | Julia | João | Murilo | Yasmin
  DESC: Webserver utilizando Node.js
  ----------------------------------------------------------------------
*/

// Carregar os módulos
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

// Tabela de tipos (informa ao navegador o tipo de arquivo que está sendo enviado)
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon",
  ".webp": "image/webp"
};

// Função para ler arquivo e enviar no response HTTP
function readFile(response, file) {
  // Descobre a extensão do arquivo (.css, .html, .png, etc...)
  let ext = path.extname(file).toLowerCase();
  let contentType = mimeTypes[ext] || "text/html; charset=utf-8";

  fs.readFile("public/" + file, function (err, data) {
    if (err) {
      response.writeHead(404, {
        "content-type": "text/html; charset=utf-8",
      });

      // Se for erro de arquivo não encontrado, tenta mostrar a sua página erro404.html
      fs.readFile("public/erro404.html", function (err404, data404) {
        if (err404) {
          response.end("<h1>Erro: arquivo não encontrado.</h1>");
        } else {
          response.end(data404);
        }
      });
      return;
    }

    // Escreve o cabeçalho HTTP com o content-type correto antes de enviar os dados
    response.writeHead(200, {
      "content-type": contentType,
    });

    response.end(data);
  });
}

// Aplicação com callback
let callback = function (request, response) {

  // Fazer o parse da URL
  let parts = url.parse(request.url);
  let caminho = parts.pathname;

  // Endpoints das páginas
  if (caminho === "/") {
    readFile(response, "index.html");
  }

  else if (caminho === "/curso") {
    readFile(response, "curso.html");
  }

  else if (caminho === "/eventos") {
    readFile(response, "eventos.html");
  }

  else if (caminho === "/infraestrutura") {
    readFile(response, "infraestrutura.html");
  }

  else if (caminho === "/quem-somos") {
    readFile(response, "quem-somos.html");
  }

  else if (caminho === "/vestibular") {
    readFile(response, "vestibular.html");
  }

  else {
    // Tenta encontrar arquivos como CSS, JS, imagens, etc.
    let arquivo = decodeURIComponent(caminho.substring(1));

    readFile(response, arquivo);
  }
};

// Criar o servidor
let server = http.createServer(callback);

// Configurar o servidor na porta 2000
server.listen(2000);
console.log("===============================================");
console.log("---------------FATEC - ZONA SUL----------------");
console.log("Servidor iniciado em http://localhost:2000....");
console.log("===============================================");
