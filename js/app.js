window.onload = () => {
  //ANIMACIONES GSAP HEADER
  const animarTexto = (textoTarget) => {
    gsap.from(textoTarget, {
      y: 100,
      delay: 0.8,
    });
    gsap.to(textoTarget, {
      delay: 1,
      y: 0,
      opacity: 1,
      duration: 0.8,
    });
  };

  const miniTextoHeader = document.querySelector(".mt-header");
  gsap.to(miniTextoHeader, {
    delay: 0.3,
    opacity: 1,
    duration: 0.7,
  });

  const tituloPrincipalHeader = document.querySelector(".tp-header");
  gsap.from(tituloPrincipalHeader, {
    x: -100,
    delay: 0.8,
  });
  gsap.to(tituloPrincipalHeader, {
    delay: 1,
    x: 0,
    opacity: 1,
    duration: 0.8,
  });

  const subtituloHeader = document.querySelector(".sub-header");
  const textoSecundarioHeader = document.querySelector(".ts-header");
  animarTexto(subtituloHeader);
  animarTexto(textoSecundarioHeader);

  const btnHeader = document.querySelector(".btn-header");
  gsap.from(".btn-header", {
    delay: 1.8,
    color: "#ccd6f6",
    border: "1px solid #ccd6f6",
  });
  gsap.to(".btn-header", {
    delay: 1.3,
    opacity: 1,
  });

  //ANIMACIONES GSAP CARTA PROYECTOS
  /*
  gsap.from(".contenedor-imagen", {
    right: "-100%",
    opacity: 0,
    width: 0,
    duration: 0.5,
    overflow: "hidden",
  });
  gsap.from(".primer-sub", {
    delay: 0.5,
    opacity: 0,
    duration: 1,
  });
  */

  //API INTESERCTION OBSERVER

  const pantalla = document.querySelectorAll("section");
  const options = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entrie) => {
      if (!entrie.isIntersecting) {
        return;
      }
    });
  });
  pantalla.forEach((pant) => {
    observer.observe(pant);
  });

  //EVENT LISTENERS NAVEGACION PRINCIPAL

  const btnAbrir = document.querySelector(".hamburguesa");
  const btnCerrar = document.querySelector(".btn-cerrar");
  const menuDesplazable = document.querySelector(".menu-desplegable");

  btnAbrir.addEventListener("click", () => {
    gsap.to(".linea-cerrar", {
      transform: "rotate(135deg)",
    });
    gsap.to(".linea-02", {
      transform: "rotate(-135deg)",
    });
    gsap.to(".linea-hamburguesa", {
      margin: 0,
      height: "1px",
    });
    gsap.to(menuDesplazable, {
      delay: 0.3,
      right: 0,
    });
  });
  btnCerrar.addEventListener("click", () => {
    gsap.to(".linea-cerrar", {
      transform: "rotate(0deg)",
    });
    gsap.to(menuDesplazable, {
      delay: 0.4,
      right: "-100%",
    });
    gsap.to(".linea-hamburguesa", {
      duration: 0.3,
      margin: "5px 0px",
      height: "2px",
    });
  });

  gsap.to(".navegacion-desktop", {
    delay: 0.8,
    duration: 1,
    opacity: 1,
  });

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      gsap.to(".navegacion-principal", {
        top: "-150px",
      });
      gsap.to(".btn-curriculum", {
        opacity: 0,
      });
    } else {
      gsap.to(".navegacion-principal", {
        top: "0px",
      });
      gsap.to(".btn-curriculum", {
        delay: 0.5,
        opacity: 1,
      });
    }
  }
};
