// - creo un array con delle immagini da inserire con un ciclo for al caricamento della pagina
// - imposto l'immagine che sará visibile al caricamento della pagina con una classe specifica
// - al click sulla freccia UP la classe che da la visibiliá passerá all'immagine successiva.

// # ELEMENTO HTML
const slidesContainerEl = document.getElementById("slides-container");
const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");

// # ARRAY SLIDES
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

// Definisco l'immagine da mostrare al caricamento
let currentImg = 0;

// # CICLO FOR ON LOAD
let slideHtml = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];

  let visibleClass = i == currentImg ? "visible" : "";

  slideHtml += `<img src="./img/${slide}" class="slide ${visibleClass}" alt="slide-${i}" />`;
}
slidesContainerEl.innerHTML = slideHtml;

// # CAMBIO IMMAGINE AL CLICK ARRROW-UP
arrowUp.addEventListener("click", function () {
  // eliminazione classe visibilitá display precedente
  const currentSlide = document.querySelector(".slide.visible");
  currentSlide.classList.remove("visible");

  //   eliminazione classe visibilitá preview precedente
  const currentPreview = document.querySelector(".preview-img.non-opacity");
  currentPreview.classList.remove("non-opacity");

  //   incremento delle img
  const allSlides = document.getElementsByClassName("slide");
  const allPreview = document.getElementsByClassName("preview-img");

  if (currentImg >= allSlides.length - 1) {
    currentImg = 0;
  } else {
    currentImg++;
  }

  //   aggiunta classe alla prossima img
  const newImg = allSlides[currentImg];
  newImg.classList.add("visible");

  const newPreview = allPreview[currentImg];
  newPreview.classList.add("non-opacity");
});

// # CAMBIO IMMAGINE AL CLICK ARRROW-DOWN
arrowDown.addEventListener("click", function () {
  // eliminazione classe visibilitá display precedente
  const currentSlide = document.querySelector(".slide.visible");
  currentSlide.classList.remove("visible");

  //   eliminazione classe visibilitá preview
  const currentPreview = document.querySelector(".preview-img.non-opacity");
  currentPreview.classList.remove("non-opacity");

  //   decremento delle img
  const allSlides = document.getElementsByClassName("slide");
  const allPreview = document.getElementsByClassName("preview-img");

  if (currentImg <= 0) {
    currentImg = allSlides.length - 1;
  } else {
    currentImg--;
  }

  //   aggiunta classe alla prossima img
  const newImg = allSlides[currentImg];
  newImg.classList.add("visible");

  const newPreview = allPreview[currentImg];
  newPreview.classList.add("non-opacity");
});
