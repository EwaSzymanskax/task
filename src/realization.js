const addButton= document.getElementById('addButton');
const blurDiv = document.getElementById('blurDiv');
const grid = document.querySelector('.grid');

const msnry = new Masonry( '.grid', {
    itemSelector: '.grid-item',
    gutter: 10,
  });
  

const addProjects=()=> {
  blurDiv.style.display = 'none';
  addButton.style.display= 'none';

  const elems = [];
  const fragment = document.createDocumentFragment();
  for ( let i = 0; i < 3; i++ ) {
    const elem = getItemElement();
    fragment.appendChild( elem );
    elems.push( elem );
  }
  
  grid.appendChild( fragment );
  msnry.appended( elems );
  msnry.reloadItems();
  msnry.layout();

  }
  function getItemElement() {
    const elem = document.createElement('div');
    elem.classList.add("grid-item");
    blurDiv.style.display = 'none';

    const img= document.createElement('img');
    img.src= "image/projects/Photo (10).png";
    elem.appendChild(img);

    return elem;
}

addButton.addEventListener('click',addProjects);

