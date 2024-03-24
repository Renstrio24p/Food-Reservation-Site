import{a as x}from"./chunk-ZKEGY7US.js";import{a as y,b as n}from"./chunk-ITYTTWZA.js";import{d as v}from"./chunk-NKHZ5Y4Q.js";v();function S(l){let f=n.dispatch;(async()=>{try{await f(y())}catch(g){console.error("Error fetching slider data:",g)}})(),n.subscribe(()=>{let r=n.getState().slider.sliderData;if(!Array.isArray(r)){console.error("Slider data is not an array:",r);return}let b=t=>{let e=r.find(i=>i._id===t);if(e){let i=document.createElement("div");i.classList.add("modal"),document.body.appendChild(i),x(i,e)}},a=t=>r.filter(e=>e.collection===t),o=t=>t.map((e,i)=>`
                    <div key=${i} class='collection-card' id=${i}>
                        <div class='collection-image'>
                            <img src='${e.image}' alt='collection' />
                        </div>
                        <div class='card-details'>
                            <div class='details'>
                                <h3>${e.title}</h3>
                                <p>Flavors: ${e.flavors?e.flavors.join(", "):""}</p>
                            </div>
                            <input type='button' id='button-${i}' value='Add To Cart' data-id='${e._id}'>
                        </div>
                    </div>
                `).join("");l.innerHTML=`
            <div>
                <div class='nav-category'>
                    <button id='appetizers' class='active'>Appetizers</button>
                    <button id='soups'>Soups</button>
                    <button id='pizza'>Pizza</button>
                    <button id='desserts'>Desserts</button>
                    <button id='drinks'>Drinks</button>
                </div>
                <div class='hero-category-section appetizers'>
                    <div>
                        <h1>Categories</h1>
                        <p>Delicious Food to choose.</p>
                    </div>
                </div>
                <div class='category-section appetizers'>
                    <h2>Appetizers</h2>
                    <div class='category-menu'>
                        ${o(a("appetizer"))}
                    </div>
                </div>
                <div class='hero-category-section soups'>
                    <div>
                        <h1>Soups</h1>
                        <p>Delicious Soothing Soup Collection</p>
                    </div>
                </div>
                <div class='category-section soups'>
                    <h2>Soups</h2>
                    <div class='category-menu'>
                        ${o(a("soup"))}
                    </div>
                </div>
                <div class='hero-category-section pizza'>
                    <div>
                        <h1>Pizza</h1>
                        <p>Delicious Pizza Collection</p>
                    </div>
                </div>
                <div class='category-section pizza'>
                    <h2>Pizza</h2>
                    <div class='category-menu'>
                        ${o(a("pizza"))}
                    </div>
                </div>
                <div class='hero-category-section desserts'>
                    <div>
                        <h1>Desserts</h1>
                        <p>Delicious Desserts</p>
                    </div>
                </div>
                <div class='category-section desserts'>
                    <h2>Desserts</h2>
                    <div class='category-menu'>
                        ${o(a("desserts"))}
                    </div>
                </div>
                <div class='hero-category-section drinks'>
                    <div>
                        <h1>Drinks</h1>
                        <p>Soothing Drinks</p>
                    </div>
                </div>
                <div class='category-section drinks'>
                    <h2>Drinks</h2>
                    <div class='category-menu'>
                        ${o(a("drinks"))}
                    </div>
                </div>
            </div>
        `,l.addEventListener("click",t=>{let e=t.target;if(e.tagName==="INPUT"&&e.getAttribute("type")==="button"){let i=e.getAttribute("data-id");b(i)}else if(e.tagName==="BUTTON"){let i=e.id,p=document.querySelector(`.hero-category-section.${i}`);if(p){let w=p.getBoundingClientRect(),c=window.pageYOffset,k=c+w.top,u=1e3,d=null,h=s=>{d||(d=s);let m=s-d,D=z(Math.min(m/u,1));window.scrollTo(0,c+D*(k-c)),m<u&&window.requestAnimationFrame(h)};window.requestAnimationFrame(h),document.querySelectorAll(".nav-category button").forEach(s=>s.classList.remove("active")),e.classList.add("active")}}});let z=t=>t<.5?2*t*t:-1+(4-2*t)*t;window.addEventListener("scroll",()=>{let t=document.querySelector(".nav-category");window.pageYOffset>50?t.classList.add("fixed"):t.classList.remove("fixed")})})}export{S as a};
