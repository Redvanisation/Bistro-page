import { makeElem, content } from './shared';


const menu = () => {
  const cardsAttr = 'container';
  const theMenu = `
      <h2 class="menu-title">The Menu</h2>
      <div class="card-deck">
          <div class="card text-white bg-dark mb-3 bistro-card">
              <img src="./img/american-breakfast.jpg" class="card-img-top card-image" alt="...">
              <div class="card-body">
              <h5 class="card-title">American Breakfast</h5>
              <p class="card-text">Coffe or orange juice served over easy eggs, bacon, hash browns, toasted bread</p>
              <p class="card-text"><small class="text-muted">Price: $15.99</small></p>
              </div>
          </div>
          <div class="card text-white bg-dark mb-3 bistro-card">
              <img src="./img/lunch-special.jpg" class="card-img-top card-image" alt="...">
              <div class="card-body">
              <h5 class="card-title">Burger Lunch Special</h5>
              <p class="card-text">Premium cheese burger, choice of salad and french fries.</p>
              <p class="card-text"><small class="text-muted">Price: $16.99</small></p>
              </div>
          </div>
          <div class="card text-white bg-dark mb-3 bistro-card">
              <img src="./img/lobster-dinner.jpg" class="card-img-top card-image" alt="...">
              <div class="card-body">
              <h5 class="card-title">Lobster Dinner</h5>
              <p class="card-text">Parmesan crusted lobster, served rice and lemon garlic butter sauce.</p>
              <p class="card-text"><small class="text-muted">Price: $30.99</small></p>
              </div>
          </div>
      </div>
      <!-- Coffee menu -->
      <div class="card-deck">
              <div class="card text-white bg-dark mb-3 bistro-card">
                  <img src="./img/cappuccino.jpg" class="card-img-top card-image" alt="...">
                  <div class="card-body">
                  <h5 class="card-title">Cappuccino</h5>
                  <p class="card-text">Italian Cappuccino made with premium whole milk, Lavazza coffee topped with cinnamon</p>
                  <p class="card-text"><small class="text-muted">Price: $7.99</small></p>
                  </div>
              </div>
              <div class="card text-white bg-dark mb-3 bistro-card">
                  <img src="./img/Latte.jpg" class="card-img-top card-image" alt="...">
                  <div class="card-body">
                  <h5 class="card-title">Latte</h5>
                  <p class="card-text">Italian Latte made with almond milk, Colombian coffee and topped with cinnamon.</p>
                  <p class="card-text"><small class="text-muted">Price: $8.99</small></p>
                  </div>
              </div>
              <div class="card text-white bg-dark mb-3 bistro-card">
                  <img src="./img/cheesecake.jpg" class="card-img-top card-image" alt="...">
                  <div class="card-body">
                  <h5 class="card-title">Cheesecake</h5>
                  <p class="card-text">New York style cheesecake.</p>
                  <p class="card-text"><small class="text-muted">Price: $7.99</small></p>
                  </div>
              </div>
              
          </div>
  `;

  content.appendChild(makeElem('div', theMenu, cardsAttr));
};

export default menu;
