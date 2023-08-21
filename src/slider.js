
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
      {title: "Działamy kompleksowo", 
      description:'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.',
      src:"image/House.png",
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



// const slideOut=()=>{
//     if (screen.width > 1024) {
//     imgMove.style.marginRight = '900px'
//     // imgMove.classList.remove('translate-x-50')
//     imgMove.classList.toggle('translate-x-50')
//     if (slideDiv.style.display === "none") {
//         slideDiv.style.display = "block";
//       } else {
//         slideDiv.style.display = "none";
//       }
//     slideDiv.style.marginRight = '300px';
//     }


// }
// const slideIn=()=>{
//     if (screen.width > 1024) {
//     imgMove.style.marginLeft = '0px';
//     imgMove.classList.add('translate-x-full');
//     if (slideDiv.style.display === "none") {
//         slideDiv.style.display = "block";
//       } else {
//         slideDiv.style.display = "none";
//       }
//     }


// }

// btnLeft.addEventListener('click',slideOut);
// btnRight.addEventListener('click',slideIn);