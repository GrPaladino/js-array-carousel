// - creo un array con delle immagini da inserire con un ciclo for al caricamento della pagina
// - imposto l'immagine che sará visibile al caricamento della pagina con una classe specifica
// - al click sulla freccia UP la classe che da la visibiliá passerá all'immagine successiva.

// # ELEMENTO HTML
const slidesContainerEl = document.getElementById("slides-container");

// # ARRAY SLIDES
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

// # CICLO FOR ON LOAD
let slideHtml = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];

  let visibleClass = i == 0 ? "visible" : "";

  slideHtml += `<img src="./img/${slide}" class="slide ${visibleClass}" alt="slide-${i}" />`;
  console.log(slide);
}
slidesContainerEl.innerHTML = slideHtml;
