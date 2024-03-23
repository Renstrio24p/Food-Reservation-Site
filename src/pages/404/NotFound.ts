
import './index.css'

export default function NotFound(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
    <div class='notfound'>
       <img class='notfound-logo' src='/food.png' alt='logo background'/>
       <div class='notfound-content'>
          <div class='notfound-left'>
            <img src='/friedchicken.png' alt='fried image' />
          </div>
          <div class='notfound-right'>
            <h1>404 Not Found</h1>
            <p>It seems you've lost please return <a href='/'>Home</a></p>
          </div>
       </div>
    </div>
  `);

}