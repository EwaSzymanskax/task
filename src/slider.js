
const imgMove = document.getElementById('imgMove');
const btnRight = document.getElementById('btnRight');
const btnLeft = document.getElementById('btnLeft');
const slideDiv= document.getElementById('slideDiv');


document.addEventListener("alpine:init", () => {
  Alpine.data("imageSlider", () => ({
    currentIndex: 1,
    slides: [
      {title: "Nowoczesna aranżacja Twojego ogrodu", 

      description:'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.',
      src:"image/Garden.png",

      },
      {title: "Działamy kompleksowo i tworzymy z pasją", 
      description:'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.',
      src:"image/House@2x.png",
      },
    ],

    previous() {
      if (this.currentIndex > 1) {
        this.currentIndex = this.currentIndex - 1;
      }
    },
    forward() {
      if (this.currentIndex < this.slides.length) {
        this.currentIndex = this.currentIndex + 1;
      }
    },
  }));
});
