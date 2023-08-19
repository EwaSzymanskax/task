const addButtonutton = document.getElementById('addButton');
const afterHigh = document.getElementById('afterHigh');
const blurDiv = document.getElementById('blurDiv');
const collapseButton = document.getElementById('collapseButton');
const elements = document.getElementById('elements');
const grid = document.querySelector('.grid');

const msnry = new Masonry( '.grid', {
    itemSelector: '.grid-item',
    gutter: 10,
  });
  

const addProjects=()=> {
    // afterHigh.style.display = 'inline';
    // blurDiv.style.display = 'none';
    console.log('ksd');
//     var elems = [ getItemElement(), getItemElement(), getItemElement() ];
    
// msnry.appended( elems );





//create new item elements
  const elems = [];
  const fragment = document.createDocumentFragment();
  for ( var i = 0; i < 3; i++ ) {
    var elem = getItemElement();
    fragment.appendChild( elem );
    elems.push( elem );
  }
  // append elements to container
  grid.appendChild( fragment );
  // add and lay out newly appended elements
  msnry.appended( elems );
    msnry.reloadItems();
    msnry.layout();

  }
  function getItemElement() {
    const elem = document.createElement('div');
    elem.classList.add("grid-item");
    elem.classList.add("test");
    // elem.style.height = '80px';
    blurDiv.style.display = 'none';

    const img= document.createElement('img');
    img.src= "image/projects/Photo (10).png";
    elem.appendChild(img);

    // elem.style.backgroundImage = `url(https://picsum.photos/500/500?random=${2})`;
    // document.body.appendChild(div);
    console.log(elem);
    return elem;

    
}

// const collapseProjects=()=>{
//     blurDiv.style = 'inline';
//     afterHigh.style.display = 'none';

// }
addButton.addEventListener('click',addProjects);
// collapseButton.addEventListener('click', collapseProjects);

