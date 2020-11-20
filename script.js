function boasVindas() {
  document.getElementById("boasVindas").innerHTML = "Bem-vindo(a) " + mail + "!";
}
function alerta() {
  mail = document.getElementById("email").value;
  if(mail.includes("@") == true) {
    alert("O e-mail " + mail + " foi enviado!");
    event.preventDefault();
    boasVindas();
  }
  else {
    alert("E-mail inválido.");
  }
}