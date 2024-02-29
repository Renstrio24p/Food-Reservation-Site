import{c as r}from"./chunk-LRCXJZIL.js";r();function n(a){a.innerHTML=`
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
  `;let e=document.querySelector("nav");window.addEventListener("scroll",function(){let i=Math.min(window.scrollY/100,1);i===1?e.classList.add("scroll"):e.classList.remove("scroll"),e.style.backgroundColor=`rgba(255, 255, 255, ${i})`})}export{n as a};
