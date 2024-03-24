import{d as o}from"./chunk-WEUAS4CC.js";o();function r(t){t.innerHTML=`
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
      <a href='/login'><button class='login-btn'>login</button></a>
    </div>
    <p class='bx bx-menu' id='menu-collapse'></p>
  `;let i=document.querySelector("nav");window.addEventListener("scroll",function(){let e=Math.min(window.scrollY/100,1);e===1?i.classList.add("scroll"):i.classList.remove("scroll"),i.style.backgroundColor=`rgba(255, 255, 255, ${e})`});let l=document.getElementById("menu-collapse"),a=t.querySelector(".right");l.onclick=()=>{a.classList.toggle("collapse")},document.addEventListener("click",e=>{let n=e.target;!a.contains(n)&&n!==l&&a.classList.remove("collapse")})}export{r as a};
