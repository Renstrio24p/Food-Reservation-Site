import{a as r,b as n}from"./chunk-NKHQMC22.js";import{d as a}from"./chunk-WEUAS4CC.js";a();function p(s){let o=n.dispatch;(async()=>{try{await o(r())}catch(t){console.error("Error fetching slider data:",t)}})(),n.subscribe(()=>{let e=n.getState().slider.sliderData;if(!Array.isArray(e)){console.error("Slider data is not an array:",e);return}c(e)});let i=t=>t.map((e,d)=>`
            <div key=${d} class='menu-card'>
                <div class='image-content'>
                    <img src='/${e.image}' alt='dish image' />
                    <p class='category'>${e.category}</p>
                </div>
                <div class='rating'>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                </div>
                <h3>${e.title}</h3>
                <p>${e.description}</p>
                <div class='menu-action'>
                    <button>Add to Cart</button>
                    <p>\u20B1 ${e.price}</p>
                </div>
            </div>
        `).join(""),c=t=>{s.innerHTML=`
            <div class='dish-menu'>
                <h2>Dish Menu</h2>
                <p class='menu-title'>Breakfast Dish</p>
                <p class='desc'>Morning Dish Favorite</p>
                <div class='breakfast-content'>
                    ${i(t.filter(e=>e.category==="breakfast"))}
                </div>
            </div>
            <div class='dish-menu'>
                <p class='menu-title'>Lunch Dish</p>
                <p class='desc'>Lunch Dish Favorites</p>
                <div class='breakfast-content'>
                    ${i(t.filter(e=>e.category==="lunch"))}
                </div>
            </div>
            <div class='dish-menu'>
                <p class='menu-title'>Dinner Dish</p>
                <p class='desc'>Dinner Dish Favorites</p>
                <div class='breakfast-content'>
                    ${i(t.filter(e=>e.category==="dinner"))}
                </div>
            </div>
            <div class='dish-menu'>
                <p class='menu-title'>Desserts</p>
                <p class='desc'>Dessert Favorites</p>
                <div class='breakfast-content'>
                    ${i(t.filter(e=>e.category==="desserts"))}
                </div>
            </div>
        `};return s}export{p as a};
