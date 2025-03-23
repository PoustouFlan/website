document.addEventListener("DOMContentLoaded", function () {
  // Carousel
  const slider = document.getElementById("videoSlider");
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let index = 0;

  function updateSlider() {
    const offset = -index * 100;
    slider.style.transform = `translateX(${offset}%)`;
  }

  document.getElementById("prevBtn").addEventListener("click", function () {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  document.getElementById("nextBtn").addEventListener("click", function () {
    index = (index + 1) % totalSlides;
    updateSlider();
  });

  // Lightbox pour agrandir les affiches de concert
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.innerHTML = `<span id="lightbox-close">&times;</span><img id="lightbox-img" src="" alt="Concert Poster">`;
  document.body.appendChild(lightbox);

  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  document.querySelectorAll(".lightboxable").forEach(poster => {
  poster.addEventListener("click", function () {
    lightboxImg.src = this.src;
    // Utilisation de la position absolue et ajustement du décalage vertical
    lightbox.style.position = 'absolute';
    lightbox.style.top = window.pageYOffset + 'px';
    lightbox.style.display = "flex";
    document.body.style.overflow = 'hidden';
  });
});


  // Fermeture de la lightbox et réactivation du scroll
  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", function (event) {
    if (event.target !== lightboxImg) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });

});
