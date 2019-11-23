import { makeElem, content } from './shared';

const home = () => {
  
  const mainContent = `
    <div class="title">
        <h1 class="f1 h1">The Red's Bistro</h1>
    </div>
  
    <div class="description-div">
        <h2 class="description-h2">Modern cuisine bistro</h2>
        <h3 class="description-h3">Best quality and best atmonsphere</h3>
    </div>
  `;
  
  
  const home = content.appendChild(makeElem('main', mainContent, 'main'));

};



export default home;
