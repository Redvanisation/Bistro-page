import loading from './initial';

export default function nav() {
    const navClasses = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom down-nav';
  
    const navContent = `
      <div class="d-flex w-50 order-0">
          <a class="navbar-brand mr-1" href="#">Our Bistro</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
              <span class="navbar-toggler-icon"></span>
          </button>
      </div>
      <div class="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="#" id="home">Home <span class="sr-only">Home</span></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#" id="menu">Menu</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#" id="contact">Contact</a>
              </li>
          </ul>
      </div>
      <span class="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last"></span>
    `;

    const theNav = content.appendChild(makeElem('nav', navContent, navClasses));
}
