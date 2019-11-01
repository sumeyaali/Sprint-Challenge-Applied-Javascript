// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


//let headerContainer = document.getElementsByClassName("header-container").appendChild(header())

const headerContainer = document.querySelector(".header-container")

headerContainer.appendChild(Header())

function Header() {
    const Lheader = document.createElement('div');
    const spanDate = document.createElement('span');
    const h1 = document.createElement('h1');
    const spanTemp = document.createElement('span');
    


// ClassList 

Lheader.classList.add('header');
spanDate.classList.add('date');
spanTemp.classList.add('temp')



spanDate.textContent = 'MARCH 28, 2019';
h1.textContent = 'Lambda Times';
spanTemp.textContent = '98°'



Lheader.appendChild(spanDate);
Lheader.appendChild(h1);
Lheader.appendChild(spanTemp);








    return Lheader
}
