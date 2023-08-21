const addButtonutton = document.getElementById('addButton');
const blurDiv = document.getElementById('blurDiv');
const elements = document.getElementById('elements');
const grid = document.querySelector('.grid');

const msnry = new Masonry( '.grid', {
    itemSelector: '.grid-item',
    gutter: 10,
  });
  

const addProjects=()=> {

  const elems = [];
  const fragment = document.createDocumentFragment();
  for ( let i = 0; i < 3; i++ ) {
    let elem = getItemElement(i);
    fragment.appendChild( elem );
    elems.push( elem );
  }

  grid.appendChild( fragment );
  msnry.appended( elems );
  msnry.reloadItems();
  msnry.layout();

  }
const imgArr= ["image/projects/Photo (8).png", "image/projects/Photo (10).png", "image/projects/Photo (3).png"]

  function getItemElement(i) {
    const elem = document.createElement('div');
    elem.classList.add("grid-item");
    blurDiv.style.display = 'none';
    addButton.style.display = 'none';

    const img= document.createElement('img');
    img.src= imgArr[i]
    elem.appendChild(img);
 
    return elem;

    
}

addButton.addEventListener('click',addProjects);

