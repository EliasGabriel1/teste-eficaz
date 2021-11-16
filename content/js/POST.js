// POST

function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );
  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    document.getElementById("msgemail").innerHTML = "E-mail válido";
    alert("email valido");
  } else {
    document.getElementById("msgemail").innerHTML =
      "<font color='red'>Email inválido </font>";
    alert("E-mail invalido");
  }
}
function verifica() {
  if (document.forms[0].email.value.length == 0) {
    alert("Por favor, informe o seu EMAIL.");
    document.frmEnvia.email.focus();
    return false;
  }
  return true;
}

function checarEmail() {
  if (
    document.forms[0].email.value == "" ||
    document.forms[0].email.value.indexOf("@") == -1 ||
    document.forms[0].email.value.indexOf(".") == -1
  ) {
    alert("Por favor, informe um E-MAIL válido!");
    return false;
  }
}

$(".cadastrar").on("click", function () {
  if (
    document.forms[0].email.value == "" ||
    document.forms[0].email.value.indexOf("@") == -1 ||
    document.forms[0].email.value.indexOf(".") == -1
  ) {
    alert("Por favor, informe um E-MAIL válido!");
    return false;
  }
  var seu_email = document.getElementById("seu_email").value;
  var nome = document.getElementById("nome").value;
  var Email = document.getElementById("Email").value;
  var telefone = document.getElementById("telefone").value;
  var rua = document.getElementById("rua").value;
  var numero = document.getElementById("numero").value;
  var complemento = document.getElementById("complemento").value;
  var bairro = document.getElementById("bairro").value;
  var cidade = document.getElementById("cidade").value;
  var uf = document.getElementById("uf").value;
  var cep = document.getElementById("CEP").value;

  const data = {
    seu_email: seu_email,
    nome: nome,
    email: Email,
    telefone: telefone,
    rua: rua,
    número: numero,
    complemento: complemento,
    bairro: bairro,
    cidade: cidade,
    uf: uf,
    cep: cep,
  };

  fetch("https://estagio.eficazmarketing.com/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Success:");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
