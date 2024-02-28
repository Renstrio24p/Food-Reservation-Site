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
            <li>Home</li>
            <li>Menu</li>
            <li>Categories</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
        <button>login</button>
     </div>
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