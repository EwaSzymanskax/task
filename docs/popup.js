const photo = document.getElementById('photo');
const popup = document.getElementbyId('popup');

const popupVisib=()=>{
    popup.style.display = "inline"; 
}


photo.addEventListener('click', popupVisib)