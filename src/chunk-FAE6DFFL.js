import{a as i}from"./chunk-WVWAKTLP.js";import{c as s}from"./chunk-TFW3BQFA.js";s();function l(n){let r=i.filter(e=>e.category==="breakfast"),c=i.filter(e=>e.category==="lunch"),o=i.filter(e=>e.category==="dinner"),d=i.filter(e=>e.category==="desserts");function a(e){return e.map((t,p)=>`
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
        `).join("")}return n.innerHTML=`
    <div class='dish-menu'>
       <h2>Dish Menu</h2>
       <p class='menu-title'>BreakFast Dish</p>
       <p class='desc'>Morning Dish Favorite</p>
       <div class='breakfast-content'>
           ${a(r)}
       </div>
    </div>
    <div class='dish-menu'>
       <p class='menu-title'>Lunch Dish</p>
       <p class='desc'>Lunch Dish Favorites</p>
       <div class='breakfast-content'>
           ${a(c)}
       </div>
    </div>
    <div class='dish-menu'>
       <p class='menu-title'>Dinner Dish</p>
       <p class='desc'>Dinner Dish Favorites</p>
       <div class='breakfast-content'>
           ${a(o)}
       </div>
    </div>
    <div class='dish-menu'>
       <p class='menu-title'>Desserts</p>
       <p class='desc'>Dessert Favorites</p>
       <div class='breakfast-content'>
           ${a(d)}
       </div>
    </div>
  `,n}export{l as a};
