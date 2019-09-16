/************************************************
 *                  Variaveis
 * ***********************************************/
const navMenu = document.querySelectorAll(".menu li");
const btnMobile = document.querySelector(".btn-mobile");
const navMenuMobile = document.querySelector(".navigation");
const btnSend = document.querySelector(".btn-submit");

/************************************************
 *                  Metodos
 * ***********************************************/

// Adicionando classe para a animar a section
const animateScroll = () => {
  let target = document.querySelectorAll("[data-animate]");
  let windowTop = window.pageYOffset + (window.innerHeight * 3) / 3.8;

  target.forEach(i => {
    if (windowTop > i.offsetTop) {
      i.classList.add("animate");
    } else {
      i.classList.remove("animate");
    }
  });
};

// Mudando estado do link durante a navegação
const selectActiveMenu = e => {
  navMenu.forEach(i => {
    i.classList.remove("active");
    navMenuMobile.classList.remove("navigation-mobile");
  });
  e.currentTarget.classList.add("active");
};

// Pegando o id da section e a posição na vertical em relação a página
const navSection = e => {
  let hash = e.target.hash;
  let section = document.querySelector(hash);
  let positionTop = section.offsetTop;

  window.scrollTo({
    top: positionTop,
    left: 0,
    behavior: "smooth"
  });

  animateScroll();
};

//Metodo: Mensagem de resposta de sucesso
const resSendSuccess = () => {
  let n = document.querySelector(".notify");
  n.classList.add("notify-success");
  setTimeout(() => {
    n.classList.remove("notify-success");
  }, 4000);
};

// Metodo: Mudando o estado do botão para enviando..
const handleBtn = e => {
  e.target.innerHTML =
    "<i class='fas fa-circle-notch lg-fa fa-spin'></i> Enviando mensagem...";
  setTimeout(() => {
    e.target.innerHTML = "Enviar mensagem";
  }, 2000);
};

// Metodo: Enviar mensagem..
const validateSend = e => {
  console.log("Mensagem enviada.");
};

/************************************************
 *                  Eventos
 * ***********************************************/

navMenu.forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();
    selectActiveMenu(event);
    navSection(event);
  });
});

// Eventos do form de notificação
btnSend.addEventListener("click", e => {
  e.preventDefault();
  handleBtn(e);
  setTimeout(() => {
    resSendSuccess();
  }, 2000);
  validateSend(e);
});

// Adicionando classe da animação no menu mobile
btnMobile.addEventListener("click", e => {
  navMenuMobile.classList.add("navigation-mobile");
});

// Animação ao scroll
window.addEventListener("scroll", () => {
  animateScroll();
});
/*****************************************
 *                PLUGIN
 * ***************************************/

// Simple Anime Plugin
if (window.SimpleAnime) {
  new SimpleAnime();
}
