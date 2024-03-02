import{a as o}from"./chunk-V3GFDQFD.js";import{a as l}from"./chunk-SMSZBL52.js";import{a as p}from"./chunk-ZJJ7SU65.js";import{a as c}from"./chunk-EC4WAU3C.js";import{c as a}from"./chunk-ZU2QHGT7.js";a();function g(t){t.innerHTML=`
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
                <div class='cards-container'>
                    ${c.map((e,h)=>`
                                <div key='${h}' class='card'>
                                    <div class='food-img'>
                                        <img src='/${e.image}' alt='food image' />
                                    </div>
                                    <div class='info'>
                                        <h3>${e.title}</h3>
                                        <p>${e.description}</p>
                                        <p>\u20B1${e.price}</p>
                                        <i class='bx bx-x'></i>
                                    </div>
                                </div>
                            `).join("")}
                </div>
            </div>
            <i class='bx bx-chevron-right' id='slide-right'></i>
        </div>
        <div id='categories' class='categories'></div>
        <div id='about-section' class='about-section'></div>
    `;let r=document.getElementById("slide-left"),n=document.getElementById("slide-right"),i=document.querySelector(".slider-slides");r&&n&&i&&(r.onclick=()=>{i.scrollLeft-=100,console.log("clicked left")},n.onclick=()=>{i.scrollLeft+=100,console.log("clicked right")});let s=document.getElementById("categories");s.appendChild(o),p(s);let d=document.getElementById("about-section");return d.appendChild(o),l(d),t}export{g as a};
