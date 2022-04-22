//Habilitar animação
const items = document.querySelectorAll("[date-animacao]");

const animacaoScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.7;
  items.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animacao");
    } else {
      element.classList.remove("animacao");
    }
  });
};
animacaoScroll();
window.addEventListener("scroll", () => {
  animacaoScroll();
});

//Validação do form

const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const nomeLabel = document.querySelector("#nomeLabel");
const emailLabel = document.querySelector("#emailLabel");
const buttonEnviar = document.querySelector("#buttonEnviar");
let campusOk = false;

inputNome.addEventListener("keyup", () => {
  if (inputNome.value.length < 3) {
    nomeLabel.innerText = "Nome *(Digite um nome valido)";
    nomeLabel.style.color = "red";
    campusOk = false;
  } else {
    nomeLabel.innerText = "Nome";
    nomeLabel.style.color = "#056826";
    campusOk = true;
  }
});

inputEmail.addEventListener("keyup", () => {
  if (inputEmail.value.length == 0) {
    emailLabel.innerText = "E-mail *(Digite um e-mail valido)";
    emailLabel.style.color = "red";
    campusOk = false;
  } else {
    emailLabel.innerText = "E-mail";
    emailLabel.style.color = "#056826";
    campusOk = true;
  }
  validaButton();
});

const validaButton = () => {
  if (campusOk == false) {
    buttonEnviar.setAttribute("disabled", "disabled");
    buttonEnviar.classList.add("buttonDisable");
  } else {
    buttonEnviar.removeAttribute("disabled");
    buttonEnviar.classList.remove("buttonDisable");
  }
};

buttonEnviar.addEventListener("click", () => {
  alert("Formulario enviado com sucesso!");
});
validaButton();
