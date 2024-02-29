import './Navbar.css'

export default function Navbar(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
     <div class='left'>
        <img src='/food.png' alt='food' />
        <div>
            <p>Online</p>
            <p>reservation</p>
        </div>
     </div>
     <div class='right'>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/menu'>Menu</a></li>
            <li><a href='/menu'>Categories</a></li>
            <li><a href='/menu'>About us</a></li>
            <li><a href='/menu'>Contact</a></li>
        </ul>
        <button>login</button>
    </div>
        <p class='bx bx-menu'></p>
  `)

  const navbar = document.querySelector('nav') as HTMLDivElement;

  window.addEventListener('scroll', function() {
    const opacity = Math.min(window.scrollY / 100, 1);
    if(opacity === 1) {
        navbar.classList.add('scroll')
    } else {
        navbar.classList.remove('scroll')
    }
    navbar.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
  });

}