
import './index.css'
import { User } from 'src/components/types/User.ts';

export default function NotFound(DOM: HTMLDivElement,user: User) {

  const username = user ? user.username : 'Guest'

  DOM.innerHTML = (`
    <div class='notfound'>
       <img class='notfound-logo' src='/food.png' alt='logo background'/>
       <div class='notfound-content'>
          <div class='notfound-left'>
            <img src='/friedchicken.png' alt='fried image' />
          </div>
          <div class='notfound-right'>
            <h1>404 Not Found</h1>
            <p> Hi ${username} It seems you've lost please return <a href='/'>Home</a></p>
          </div>
       </div>
    </div>
  `);

}