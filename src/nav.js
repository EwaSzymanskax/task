const search = document.getElementById("search")
const input = document.getElementById("input")
const closeButton = document.getElementById("closeButton")

const searching=()=>{
    input.style.display= "inline";
    closeButton.style.display="inline";
}

const closeInput=()=>{
    input.style.display="none";
    closeButton.style.display="none";
}
search.addEventListener("click",searching),
closeButton.addEventListener("click", closeInput)



