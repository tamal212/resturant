/* 
 * USE HTML TAGS
const button = document.getElementById('button');
const text = document.getElementById('text');
let num = 0;
button.addEventListener('click', () => {
  num++;
  text.innerHTML = num;
})

*/

// ! USE REACT
const matherDiv = document.getElementById('main'); 
const myElement = (
   <div>
    <h1 id="text">0</h1>
    <div>
        <button id="button">increment</button>
  </div>
  </div>
);

//  const root= ReactDOM.createRoot(matherDiv);
//  root.render(myElement, matherDiv);

 ReactDOM.render(myElement, matherDiv);