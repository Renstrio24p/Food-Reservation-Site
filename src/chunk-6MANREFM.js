import{a as i}from"./chunk-TKGTIDG2.js";import{c as a}from"./chunk-TFW3BQFA.js";a();function l(s){let r=i.filter(e=>e.category==="breakfast"),o=i.filter(e=>e.category==="lunch"),d=i.filter(e=>e.category==="dinner"),c=i.filter(e=>e.category==="desserts");function n(e){return e.map((t,p)=>`
            <div key=${p} class='menu-card'>
                <div class='image-content'>
                    <img src='/${t.image}' alt='dish image' />
                    <p class='category'>${t.category}</p>
                </div>
                <div class='rating'>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                </div>
                <h3>${t.title}</h3>
                <p>${t.description}</p>
                <div class='menu-action'>
                    <button>Add to Cart</button>
                    <p>\u20B1 ${t.price}</p>
                </div>
            </div>
        `).join("")}return s.innerHTML=`
    <div class='dish-menu'>
       <h2>Dish Menu</h2>
       <p class='menu-title'>BreakFast Dish</p>
       <p class='desc'>Morning Dish Favorite</p>
       <div class='breakfast-content'>
           ${n(r)}
       </div>
    </div>
    <div class='dish-menu'>
       <p class='menu-title'>Lunch Dish</p>
       <p class='desc'>Lunch Dish Favorites</p>
       <div class='breakfast-content'>
           ${n(o)}
       </div>
    </div>
    <div class='dish-menu'>
       <p class='menu-title'>Dinner Dish</p>
       <p class='desc'>Dinner Dish Favorites</p>
       <div class='breakfast-content'>
           ${n(d)}
       </div>
    </div>
    <div class='dish-menu'>
       <p class='menu-title'>Desserts</p>
       <p class='desc'>Dessert Favorites</p>
       <div class='breakfast-content'>
           ${n(c)}
       </div>
    </div>
  `,s}export{l as a};
