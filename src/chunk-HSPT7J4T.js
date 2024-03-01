import{a as t}from"./chunk-TKGTIDG2.js";import{c}from"./chunk-TFW3BQFA.js";c();function p(d){let o=t.filter(e=>e.collection==="appetizer"),r=t.filter(e=>e.collection==="soup"),n=t.filter(e=>e.collection==="pizza"),s=t.filter(e=>e.collection==="desserts"),i=e=>e.map((a,l)=>`
                <div key=${l} class='collection-card'>
                    <div class='collection-image'>
                        <img src='${a.image}' alt='collection' />
                    </div>
                    <div class='card-details'>
                        <div class='details'>
                            <h3>${a.title}</h3>
                            <p>Flavors: ${a.flavors?a.flavors.join(", "):""}</p>
                        </div>
                        <button>Add To Cart</button>
                    </div>
                </div>
            `).join("");d.innerHTML=`
        <div>
            <div class='nav-category'>
                <button>Appetizers</button>
                <button>Soups</button>
                <button>Pizza</button>
                <button>Desserts</button>
                <button>Drinks</button>
            </div>
            <div class='hero-category-section'>
                <div>
                    <h1>Categories</h1>
                    <p>Delicious Food to choose.</p>
                </div>
            </div>
            <div class='category-section'>
                <h2>Appetizers</h2>
                <div class='category-menu'>
                    ${o.length>0?i(o):"No appetizers available"}
                </div>
            </div>
            <div class='category-section'>
                <h2>Soup</h2>
                <div class='category-menu'>
                    ${r.length>0?i(r):"No Soups available"}
                </div>
            </div>
            <div class='hero-category-section pizza'>
                <div>
                    <h1>Pizza</h1>
                    <p>Delicious Pizza Collection</p>
                </div>
            </div>
            <div class='category-section'>
                <h2>Pizza</h2>
                <div class='category-menu'>
                    ${n.length>0?i(n):"No Pizza available"}
                </div>
            </div>
            <div class='hero-category-section desserts'>
                <div>
                    <h1>Desserts</h1>
                    <p>Delicious Desserts</p>
                </div>
            </div>
            <div class='category-section'>
                <h2>Desserts</h2>
                <div class='category-menu'>
                    ${s.length>0?i(s):"No Desserts available"}
                </div>
            </div>
        </div>
    `}export{p as a};
