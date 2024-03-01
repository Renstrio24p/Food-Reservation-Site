import{c as r}from"./chunk-TFW3BQFA.js";r();function o(a){a.innerHTML=`
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
  `;let i=document.querySelector("nav");window.addEventListener("scroll",function(){let e=Math.min(window.scrollY/100,1);e===1?i.classList.add("scroll"):i.classList.remove("scroll"),i.style.backgroundColor=`rgba(255, 255, 255, ${e})`});let n=document.getElementById("menu-collapse"),t=a.querySelector(".right");n.onclick=()=>{t.classList.toggle("collapse")},document.addEventListener("click",e=>{let l=e.target;!t.contains(l)&&l!==n&&t.classList.remove("collapse")})}export{o as a};
