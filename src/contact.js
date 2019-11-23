import { loading } from './initial';
import makeElem from './initial';


export default function contact() {
  const formAttr = 'container form-container';
  const theContact = `
            <form class="form">
                <h2 class="form-title">Contact us</h2>

                <div class="form-group">
                    <label for="exampleInputEmail1">Full name</label>
                    <input type="text" class="form-control" placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label for="email-input">Email</label>
                    <input type="email" class="form-control" id="email-input" placeholder="Enter your email">
                </div>
                <div class="form-group">
                    <label for="message">Your message</label>
                    <textarea class="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-dark">Contact us</button>
            </form>
    `;

  loading.content.appendChild(loading.makeElm('div', theContact, formAttr));
}
