import './Navbar.css';

export default function Navbar(DOM: HTMLDivElement) {
  DOM.innerHTML = `
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
        <li><a href='/category'>Categories</a></li>
        <li><a href='/aboutus'>About us</a></li>
        <li><a href='/contactus'>Contact</a></li>
      </ul>
      <a href='/login'><button>login</button></a>
    </div>
    <p class='bx bx-menu' id='menu-collapse'></p>
  `;

  const navbar = document.querySelector('nav') as HTMLDivElement;

  window.addEventListener('scroll', function () {
    const opacity = Math.min(window.scrollY / 100, 1);
    if (opacity === 1) {
      navbar.classList.add('scroll');
    } else {
      navbar.classList.remove('scroll');
    }
    navbar.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
  });

  // Collapse

  const menuCollapse = document.getElementById('menu-collapse') as HTMLParagraphElement;
  const navRight = DOM.querySelector('.right') as HTMLDivElement;

  menuCollapse.onclick = () => {
    navRight.classList.toggle('collapse');
  };

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (!navRight.contains(target) && target !== menuCollapse) {
      navRight.classList.remove('collapse');
    }
  });
}
