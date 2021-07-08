window.onload = () => {
  //WINDOW ONLOAD PARA NO CONTAMINAR EL SCOPE GLOBAL Y PARA AGILIZAR LA CARGA DEL DOCUMENTO

  //EVENT LISTENERS BARRA SUPERIOR(SCROLL)
  const barraNavPrincipal = document.querySelector(".navegacion-principal");
  const btnMenuDesktop = document.querySelector(".btn-menu-desktop");
  const btnCurriculum = document.querySelectorAll(".btn-curriculum");

  const scrollearBarraSuperior = () => {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      gsap.to(barraNavPrincipal, {
        top: "-150px",
      });
      gsap.to(btnMenuDesktop, {
        opacity: 0,
      }); //ESTA CLASE PARA NO CREAR CONFLICTO CON EL OTRO BOTON CURRICULUM CON LAS ANIMACIONES GSAP//
    } else {
      gsap.to(barraNavPrincipal, {
        top: "0px",
      });
      gsap.to(btnCurriculum, {
        delay: 0.5,
        opacity: 1,
      });
    }
  };

  window.onscroll = () => {
    scrollearBarraSuperior();
  };

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
  }; //FUNCION PARA NO REPETIR LA MISMA ANIMACION EN EL SUBTITULO Y EL TEXTO SECUNDARIO

  const miniTextoHeader = document.querySelector(".mt-header");
  gsap.to(miniTextoHeader, {
    opacity: 1,
    duration: 0.5,
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
  animarTexto(subtituloHeader);
  const textoSecundarioHeader = document.querySelector(".ts-header");
  animarTexto(textoSecundarioHeader);

  const btnHeader = document.querySelector(".btn-header");
  gsap.from(btnHeader, {
    delay: 1.8,
    color: "#ccd6f6",
    border: "1px solid #ccd6f6",
  });
  gsap.to(btnHeader, {
    delay: 1.3,
    opacity: 1,
  });

  //EVENT LISTENERS NAVEGACION PRINCIPAL / MENU DESPLEGABLE
  const btnAbrir = document.querySelector(".hamburguesa");
  const btnCerrar = document.querySelector(".btn-cerrar");
  const menuDesplazable = document.querySelector(".menu-desplegable");
  const linksInternos = document.querySelectorAll(".links-internos");
  const lineaHamburguesa = document.querySelectorAll(".linea-hamburguesa");
  const lineaCerrar = document.querySelectorAll(".linea-cerrar");
  const lineaCerrarDos = document.querySelectorAll(".linea-02");
  const navegacionDesktop = document.querySelector(".navegacion-desktop");

  //ME PODRIA HABER AHORRADO TODOS ESTOS SELECTORES YA QUE PODRIA PASARLOS DIRECTAMENTE CON GSAP, PERO EN EL CASO DE QUE EN UN FUTURO CAMBIE LA MANERA DE ANIMAR ESTA SECCION O NECESITE HACER ALGO EXTRA CON ELLA, DECIDI SELECCIONAR TODOS LOS ELEMENTOS

  gsap.to(navegacionDesktop, {
    delay: 0.8,
    duration: 1,
    opacity: 1,
  });

  const cerrarDesplegable = () => {
    gsap.to(menuDesplazable, {
      delay: 0.4,
      right: "-100%",
    });
    gsap.to(lineaHamburguesa, {
      duration: 0.3,
      margin: "5px 0px",
      height: "2px",
    });
  };

  const abrirDesplegable = () => {
    gsap.to(lineaHamburguesa, {
      margin: 0,
      height: "1px",
    });
    gsap.to(menuDesplazable, {
      delay: 0.3,
      right: 0,
    });
  };

  btnAbrir.addEventListener("click", () => {
    gsap.to(lineaCerrar, {
      transform: "rotate(135deg)",
    });
    gsap.to(lineaCerrarDos, {
      transform: "rotate(-135deg)",
    });
    abrirDesplegable();
  });
  btnCerrar.addEventListener("click", () => {
    gsap.to(lineaCerrar, {
      transform: "rotate(0deg)",
    });
    cerrarDesplegable();
  });

  linksInternos.forEach((link) => {
    link.addEventListener("click", () => {
      cerrarDesplegable();
    });
  });

  //API INTESERCTION OBSERVER
  const secciones = document.querySelectorAll(".intersection-obs");

  const options = {
    root: null, //es el default, todo el viewport
    threshold: 0.2, // 0 dispara en el momento que el elemento entra al observador, 1 dispara cuando todo el elemento ya esta dentro del observador
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } //si no esta en la pantalla, termina la funcion
      entry.target.style.top = "0px";
      entry.target.style.opacity = "1";
    });
  }, options);
  secciones.forEach((section) => {
    observer.observe(section); //al usar querySelectorAll tengo un array con las secciones, y lo que quiero lograr es observar uno por uno
  });
};
