import{a as x,b as o}from"./chunk-LYSHGCLI.js";import{d as v}from"./chunk-WEUAS4CC.js";v();function D(d){let f=o.dispatch;(async()=>{try{await f(x())}catch(l){console.error("Error fetching slider data:",l)}})(),o.subscribe(()=>{let r=o.getState().slider.sliderData;if(!Array.isArray(r)){console.error("Slider data is not an array:",r);return}let i=e=>r.filter(t=>t.collection===e),a=e=>e.map((t,n)=>`
                    <div key=${n} class='collection-card'>
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
            </div>
        `,d.addEventListener("click",e=>{let t=e.target;if(t.tagName==="BUTTON"){let n=t.id,g=document.querySelector(`.hero-category-section.${n}`);if(g){let b=g.getBoundingClientRect(),s=window.pageYOffset,z=s+b.top,p=1e3,c=null,u=h=>{c||(c=h);let m=h-c,w=y(Math.min(m/p,1));window.scrollTo(0,s+w*(z-s)),m<p&&window.requestAnimationFrame(u)};window.requestAnimationFrame(u)}}});let y=e=>e<.5?2*e*e:-1+(4-2*e)*e;window.addEventListener("scroll",()=>{let e=document.querySelector(".nav-category");window.pageYOffset>50?e.classList.add("fixed"):e.classList.remove("fixed")})})}export{D as a};
