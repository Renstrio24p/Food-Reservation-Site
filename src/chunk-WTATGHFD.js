import{a as x,b as o}from"./chunk-ITYTTWZA.js";import{d as m}from"./chunk-NKHZ5Y4Q.js";m();function k(d){let y=o.dispatch;(async()=>{try{await y(x())}catch(g){console.error("Error fetching slider data:",g)}})(),o.subscribe(()=>{let r=o.getState().slider.sliderData;if(!Array.isArray(r)){console.error("Slider data is not an array:",r);return}let i=e=>r.filter(t=>t.collection===e),a=e=>e.map((t,s)=>`
                    <div key=${s} class='collection-card'>
                        <div class='collection-image'>
                            <img src='${t.image}' alt='collection' />
                        </div>
                        <div class='card-details'>
                            <div class='details'>
                                <h3>${t.title}</h3>
                                <p>Flavors: ${t.flavors?t.flavors.join(", "):""}</p>
                            </div>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                `).join("");d.innerHTML=`
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
                        ${a(i("appetizer"))}
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
                        ${a(i("soup"))}
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
                        ${a(i("pizza"))}
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
                        ${a(i("desserts"))}
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
                        ${a(i("drinks"))}
                    </div>
                </div>
            </div>
        `,d.addEventListener("click",e=>{let t=e.target;if(t.tagName==="BUTTON"){let s=t.id,l=document.querySelector(`.hero-category-section.${s}`);if(l){let b=l.getBoundingClientRect(),n=window.pageYOffset,z=n+b.top,p=1e3,c=null,u=h=>{c||(c=h);let v=h-c,w=f(Math.min(v/p,1));window.scrollTo(0,n+w*(z-n)),v<p&&window.requestAnimationFrame(u)};window.requestAnimationFrame(u)}}});let f=e=>e<.5?2*e*e:-1+(4-2*e)*e;window.addEventListener("scroll",()=>{let e=document.querySelector(".nav-category");window.pageYOffset>50?e.classList.add("fixed"):e.classList.remove("fixed")})})}export{k as a};
