import{a as v}from"./chunk-XHPH453U.js";import{a as w}from"./chunk-MEX6XUGN.js";import{a as h,b as i}from"./chunk-HKBN36RB.js";import{a as y}from"./chunk-UF4NX5DF.js";import{a as z}from"./chunk-X366UD27.js";import{a as k}from"./chunk-F4NGDJG7.js";import{d as b}from"./chunk-WEUAS4CC.js";b();function T(g){y(()=>{let l=i.dispatch;(async n=>{try{await l(h(n))}catch(s){console.error("Error fetching slider data:",s)}})("posts")},[]),i.subscribe(()=>{let r=i.getState().slider.sliderData;if(!Array.isArray(r)){console.error("Slider data is not an array:",r);return}let n=e=>{let t=r.find(a=>a._id===e);if(t){let a=document.createElement("div");a.classList.add("modal"),document.body.appendChild(a),a.appendChild(v),w(a,t)}},s=e=>r.filter(t=>t.collection===e),p="";k.forEach(e=>{let t=s(e.data);p+=z(e.name,e.description,t)}),g.innerHTML=`
            <div>
                <div class='nav-category'>
                    <button id='appetizers' class='active'>Appetizers</button>
                    <button id='soups'>Soups</button>
                    <button id='pizza'>Pizza</button>
                    <button id='desserts'>Desserts</button>
                    <button id='drinks'>Drinks</button>
                </div>
                ${p}
            </div>
        `,g.addEventListener("click",e=>{let t=e.target;if(t.tagName==="INPUT"&&t.getAttribute("type")==="button"){let a=t.getAttribute("data-id");n(a)}else if(t.tagName==="BUTTON"){let a=t.id,f=document.querySelector(`.hero-category-section.${a}`);if(f){let L=f.getBoundingClientRect(),c=window.pageYOffset,S=c+L.top,m=1e3,d=null,u=o=>{d||(d=o);let x=o-d,E=D(Math.min(x/m,1));window.scrollTo(0,c+E*(S-c)),x<m&&window.requestAnimationFrame(u)};window.requestAnimationFrame(u),document.querySelectorAll(".nav-category button").forEach(o=>o.classList.remove("active")),t.classList.add("active")}}});let D=e=>e<.5?2*e*e:-1+(4-2*e)*e;window.addEventListener("scroll",()=>{let e=document.querySelector(".nav-category");window.pageYOffset>50?e.classList.add("fixed"):e.classList.remove("fixed")})})}export{T as a};
