import{a as d,b as s}from"./chunk-LYSHGCLI.js";import{d as c}from"./chunk-WEUAS4CC.js";c();function h(r){let l=s.dispatch;(async()=>{try{await l(d())}catch(t){console.error("Error fetching slider data:",t)}})(),s.subscribe(()=>{let e=s.getState().slider.sliderData;if(!Array.isArray(e)){console.error("Slider data is not an array:",e);return}a(e)}),r.innerHTML=`
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
    `;let a=t=>{let e=r.querySelector(".cards-container");e.innerHTML=t.map((o,i)=>`
            <div key='${i}' class='card'>
                <div class='food-img'>
                    <img src='/${o.image}' alt='food image' />
                    <p class='item-category'>${o.category}</p>
                </div>
                <div class='info'>
                    <h3 class='title-item'>${o.title}</h3>
                    <p>${o.description}</p>
                    <p>\u20B1${o.price}</p>
                    <i class='bx bx-x'></i>
                </div>
            </div>
        `).join(""),e.style.scrollBehavior="smooth"},p=(t,e)=>{let o=e.filter(i=>i.category===t);a(o)},n=document.querySelectorAll("button");n.forEach(t=>{t.addEventListener("click",()=>{n.forEach(x=>x.classList.remove("selected")),t.classList.add("selected");let e=t.textContent.toLowerCase(),i=s.getState().slider.sliderData;e==="all"?a(i):p(e,i)})});let f=document.getElementById("slide-left"),g=document.getElementById("slide-right");f.onclick=()=>{let t=r.querySelector(".cards-container");t.scrollLeft-=100},g.onclick=()=>{let t=r.querySelector(".cards-container");t.scrollLeft+=100}}export{h as a};
