
const imgMove = document.getElementById('imgMove');
const btnRight = document.getElementById('btnRight');
const btnLeft = document.getElementById('btnLeft');

const slideIn=()=>{
    imgMove.style.marginRight = '900px'
    imgMove.classList.toggle('translate-x-full');

}
const slideOut=()=>{
    imgMove.style.marginLeft = '10px';
    imgMove.classList.toggle('translate-x-full');


}

btnLeft.addEventListener('click',slideIn);
btnRight.addEventListener('click',slideOut);