const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function(event) {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = document.getElementById("idade").value;

  const erro = document.getElementById("erro");
  erro.textContent = "";

  if (nome === "") {
    event.preventDefault();
    erro.textContent = "O nome não pode estar vazio.";
    return;
  }

  if (!email.includes("@")) {
    event.preventDefault();
    erro.textContent = "O email deve conter '@'.";
    return;
  }

  if (idade <= 0) {
    event.preventDefault();
    erro.textContent = "A idade deve ser maior que 0.";
    return;
  }
});
