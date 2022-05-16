//initializez variabila responsabila de indexarea slide-urilor
let slideIndex = 0;

function showSlides() {
  //in index.html sunt elementele cu clasa ”slide”
  let slides = document.getElementsByClassName("slide");
  var i;
  //returnandu-se o colectie de elemente
  for (i = 0; i < slides.length; i++) {
    //se vor parcurge elementele si nu vor fi prezentate
    slides[i].style.display = "none";
  }

  slideIndex++;
  //incrementez variabila responsabila de indexare
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // succesiv prezint slide-urile
  slides[slideIndex].style.display = "block";

  //functia va fi apelata peste 4 secunde, 4000 milisecunde = 4 secunde
  setInterval(showSlides, 4000);
}

//apelez funcția ce animeaza sliderul
showSlides();
