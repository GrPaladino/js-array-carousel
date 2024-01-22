// - creo un array con delle immagini da inserire con un ciclo for al caricamento della pagina
// - imposto l'immagine che sará visibile al caricamento della pagina con una classe specifica
// - al click sulla freccia UP la classe che da la visibiliá passerá all'immagine successiva.
//
// - Milestone 1:
// - aggiungere funzionalità sul carosello in modo che ogni 3 secondi lo slider scorra all'immagine successiva. Se non è stato già fatto, abilitare slider infinito (quando arrivo alla fine, ricomincio da capo, sia con l'interval che con i pulsanti).

// - Milestone 2:
// - Aggiungere il ciclo infinito del carosello (se non è stato fatto). Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all'immagine precedente, dovrà comparire l'ultima immagine dell'array e viceversa.

// - Bonus 1:
// - Creare una funzione goToSlide(n)  in grado di gestire il cambio di slide. Utilizzarla sul click delle frecce e nell'interval.

// - Bonus 2:
// - Lo scorrimento automatico delle immagini si blocca quando l'utente mette il mouse sopra il carosello e riparte quando il mouse esce fuori.

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

// # CAMBIO IMMAGINE AL CLICK ARRROW-DOWN
arrowDown.addEventListener("click", function () {
  const nextI = nextImage();
});

// # CAMBIO IMMAGINE AL CLICK ARRROW-UP
arrowUp.addEventListener("click", function () {
  const prevI = prevImage();
});

// ## STOP INTERVAL SULL'HOVER
let interval = false;
slidesContainerEl.addEventListener("mouseover", function () {
  stopInterval(myInterval);
});

// // ## RIPRENDE INTERVAL ALLA RIMOZIONE DELL'HOVER
slidesContainerEl.addEventListener("mouseleave", function () {
  myInterval = setInterval(nextImage, 3000);
});

// ## AL CLICK DELLA PREVIEW ANDARE ALL'IMMAGINE

// ## FUNCTION PER L'IMMAGINE SUCCESSIVA E PRECEDENTE

function nextImage() {
  //  eliminazione classe visibilitá display precedente
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
}

function prevImage() {
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
}

// ## FUNCTION SET INTERVAL

let myInterval = setInterval(nextImage, 3000);

// ## FUNCTION GO TO SLIDE

function goToSlide(nSlide) {
  //   //   incremento delle img
  //   const allSlides = document.getElementsByClassName("slide");
  //   const allPreview = document.getElementsByClassName("preview-img");
  //   nSlide.addEventListener("click", function () {
  //     for (let i = 0; i < allPreview.length; i++) {
  //       const image = allPreview[i];
  //       let nSlide = image;
  //     }
  //   });
  //   // eliminazione classe visibilitá display precedente
  //   const currentSlide = document.querySelector(".slide.visible");
  //   currentSlide.classList.remove("visible");
  //   //   eliminazione classe visibilitá preview precedente
  //   const currentPreview = document.querySelector(".preview-img.non-opacity");
  //   currentPreview.classList.remove("non-opacity");
  //   //   aggiunta classe alla prossima img
  //   const newImg = allSlides[nSlide];
  //   newImg.classList.add("visible");
  //   const newPreview = allPreview[nSlide];
  //   newPreview.classList.add("non-opacity");
}

// ## FUNCTION STOP INTERVAL
function stopInterval(interval) {
  clearInterval(interval);
}
