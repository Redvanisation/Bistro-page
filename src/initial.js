const loading = document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  
  const mainContent = `
    <div class="title">
        <h1 class="f1 h1">The Smudge Bistro</h1>
    </div>
  
    <div class="description-div">
        <h2 class="description-h2">The best bistro on the planet</h2>
        <h3 class="description-h3">We don't serve no vegetables</h3>
    </div>
  `;
  
  
  const makeElem = (elm, cont, classes) => {
    const elem = document.createElement(elm);
    elem.innerHTML = cont;
    elem.setAttribute('class', classes);
    return elem;
  };
  
  const theMain = content.appendChild(makeElem('main', mainContent, 'main'));

});



export default { loading };
