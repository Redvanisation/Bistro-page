const makeElem = (elm, cont, classes) => {
  const elem = document.createElement(elm);
  elem.innerHTML = cont;
  elem.setAttribute('class', classes);
  return elem;
};

const content = document.querySelector('.content');


export {
  makeElem,
  content,
};
