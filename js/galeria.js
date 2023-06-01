"strict use"; //modal: criando variáveis
// array das imagens dentro de um objeto
document.addEventListener("DOMContentLoaded", function () {
  let imagens = [
    { img: "img/galeria/carpete/carpete-1.jpg" },
    { img: "img/galeria/carpete/carpete-2.jpg" },
    { img: "img/galeria/carpete/carpete-3.jpg" },
    { img: "img/galeria/carpete/carpete-4.jpg" },
    { img: "img/galeria/carpete/carpete-5.jpg" },
    { img: "img/galeria/carpete/carpete-6.jpg" },
  ];

  /*Variáveis*/
  let contador = 0;
  const contener = document.querySelector(".slideshow");
  const overlay = document.querySelector(".overlay");
  const galeria_imagens = document.querySelectorAll(".galeria img");
  const img_slideshow = document.querySelector(".slideshow img");

  //Mudar imagens ao clicar nas setas da tela
  contener.addEventListener("click", function (event) {
    let atras = contener.querySelector(".atras"),
      adiante = contener.querySelector(".adiante"),
      img = contener.querySelector("img"),
      tgt = event.target;

    if (tgt == atras) {
      if (contador > 0) {
        img.src = imagens[contador - 1].img;
        contador--;
      } else {
        img.src = imagens[imagens.length - 1].img;
        contador = imagens.length - 1;
      }
    } else if (tgt == adiante) {
      if (contador < imagens.length - 1) {
        img.src = imagens[contador + 1].img;
        contador++;
      } else {
        img.src = imagens[0].img;
        contador = 0;
      }
    }
  });

  //Mudar as imagens ao clicar nas setas laterais do teclado
  document.addEventListener("keydown", function (e) {
    let img = contener.querySelector("img");

    if (e.key === "ArrowLeft") {
      if (contador > 0) {
        img.src = imagens[contador - 1].img;
        contador--;
      } else {
        img.src = imagens[imagens.length - 1].img;
        contador = imagens.length - 1;
      }
    } else if (e.key === "ArrowRight") {
      if (contador < imagens.length - 1) {
        img.src = imagens[contador + 1].img;
        contador++;
      } else {
        img.src = imagens[0].img;
        contador = 0;
      }
    }
  });

  Array.from(galeria_imagens).forEach((img) => {
    img.addEventListener("click", (event) => {
      const imagem_selecionada = +event.target.dataset.imgMostrar;
      img_slideshow.src = imagens[imagem_selecionada].img;
      contador = imagem_selecionada;
      overlay.style.opacity = 1;
      overlay.style.visibility = "visible";
    });
  });

  /*Botão fechar*/
  const span = document.getElementsByClassName("btn_fechar")[0];
  span.onclick = function () {
    overlay.style.visibility = "hidden";
  };

  /*Fechar com botão ESC*/
  const closeModal = function () {
    if (overlay.style.visibility === "visible") {
      overlay.style.visibility = "hidden";
    }
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.style.visibility === "visible") {
      closeModal();
    }
  });

  /*Fechar clicando no slideshow */
  //   contener.addEventListener('click', function () {
  //     closeModal();
  //   });
});
