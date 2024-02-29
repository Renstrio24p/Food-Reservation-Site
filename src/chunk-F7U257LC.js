import{a as i}from"./chunk-PKX4QZU4.js";import{c}from"./chunk-LRCXJZIL.js";c();function f(s){let n=i;s.innerHTML=`
        <h4>Categories</h4>
        <div class='options'>
            <button class='selected all'>All</button>
            <button>Desserts</button>
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
        </div>
        <div class='slider categories'>
            <i class='bx bx-chevron-left' id='slide-left'></i>
            <div class='slider-slides'> 
                <div class='cards-container'></div>
            </div>
            <i class='bx bx-chevron-right' id='slide-right'></i>
        </div>
    `;let l=e=>{n=i.filter(t=>t.category===e),r(n)},r=e=>{let t=s.querySelector(".cards-container");t.innerHTML=e.map((o,g)=>`
            <div key='${g}' class='card'>
                <div class='food-img'>
                    <img src='/${o.image}' alt='food image' />
                    <p>${o.category}</p>
                </div>
                <div class='info'>
                    <h3>${o.title}</h3>
                    <p>${o.description}</p>
                    <p>\u20B1${o.price}</p>
                    <i class='bx bx-x'></i>
                </div>
            </div>
        `).join(""),t.style.scrollBehavior="smooth"};r(i);let d=document.getElementById("slide-left"),p=document.getElementById("slide-right"),a=document.querySelectorAll("button");a.forEach(e=>{e.addEventListener("click",()=>{a.forEach(o=>o.classList.remove("selected")),e.classList.add("selected");let t=e.textContent.toLowerCase();t==="all"?r(i):l(t)})}),d.onclick=()=>{let e=s.querySelector(".cards-container");e.scrollLeft-=100},p.onclick=()=>{let e=s.querySelector(".cards-container");e.scrollLeft+=100}}export{f as a};
