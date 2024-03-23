import{a as t}from"./chunk-FFGMKVEJ.js";import{a as h}from"./chunk-ORUQQTB7.js";import{a as l}from"./chunk-BD3LKBPD.js";import{a as c,b as r}from"./chunk-LYSHGCLI.js";import{d}from"./chunk-WEUAS4CC.js";d();function m(n){let p=r.dispatch;(async()=>{try{await p(c())}catch(i){console.error("Error fetching slider data:",i)}})(),r.subscribe(()=>{let e=r.getState().slider.sliderData;if(!Array.isArray(e)){console.error("Slider data is not an array:",e);return}x(e)}),n.innerHTML=`
        <div class='hero-section'>
            <h2><span>Pot</span>session <span>in Tuao<span></h2>
            <p>Cagayan</p> 
            <div>
                <button>Order Now</button>
                <button>View More</button>
            </div> 
            <img class='iphone' src='/iphone-app.png' alt='iphone' />      
        </div>
        <h2 class='menu-h2'>Menu</h2>
        <div class='slider'>
            <i class='bx bx-chevron-left' id='slide-left'></i>
            <div class='slider-slides'> 
                <div class='cards-container'></div>
            </div>
            <i class='bx bx-chevron-right' id='slide-right'></i>
        </div>
        <div id='categories' class='categories'></div>
        <div id='about-section' class='about-section'></div>
    `;let x=i=>{let e=document.querySelector(".cards-container");if(!e){console.error("Cards container not found");return}e.innerHTML=i.map((o,g)=>`
            <div key='${g}' class='card'>
                <div class='food-img'>
                    <img src='/${o.image}' alt='food image' />
                </div>
                <div class='info'>
                    <h3>${o.title}</h3>
                    <p>${o.description}</p>
                    <p>\u20B1${o.price}</p>
                    <i class='bx bx-x'></i>
                </div>
            </div>
        `).join("")},a=document.getElementById("categories");a.appendChild(t),l(a);let s=document.getElementById("about-section");return s.appendChild(t),h(s),n}export{m as a};
