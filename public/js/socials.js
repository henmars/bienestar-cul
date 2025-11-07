    document.addEventListener("DOMContentLoaded", function () {
      const scrollBtnDesktop = document.getElementById("scrollTopBtn");
      const scrollBtnMobile = document.getElementById("scrollTopBtnMobile");
      const floatingSocials = document.querySelector(".floating-socials");

      // 🔹 Mostrar redes sociales con efecto al cargar
      if (floatingSocials) {
        setTimeout(() => floatingSocials.classList.add("visible"), 200);
      }

      // 🔹 Ocultar botones de subir al inicio
      if (scrollBtnDesktop) scrollBtnDesktop.classList.remove("visible");
      if (scrollBtnMobile) scrollBtnMobile.classList.remove("visible");

      // 🔹 Mostrar botones de subir al hacer scroll
      window.addEventListener("scroll", function () {
        const show = document.documentElement.scrollTop > 100 || document.body.scrollTop > 100;

        if (scrollBtnDesktop) scrollBtnDesktop.classList.toggle("visible", show);
        if (scrollBtnMobile) scrollBtnMobile.classList.toggle("visible", show);
      });

      // 🔹 Acción de subir suavemente
      const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
      if (scrollBtnDesktop) scrollBtnDesktop.addEventListener("click", scrollToTop);
      if (scrollBtnMobile) scrollBtnMobile.addEventListener("click", scrollToTop);
    });