import{d as a}from"./chunk-WEUAS4CC.js";a();function n(e,o){e.innerHTML=`
    <div class='modal-storage'>
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class='modal-image'>
                <img src='${o.image}' alt='food image' />
            </div>
            <div class='modal-info'>
                <h1>${o.title}</h1>
                <p>Description: ${o.description}</p>
                <p>Price: ${o.price}</p>
            </div>
        </div>
    </div>
    `;let i=e.querySelector(".modal-storage");e.querySelector(".close").addEventListener("click",()=>{i.style.display="none",e.remove()}),document.addEventListener("keydown",t=>{(t.key==="Escape"||t.key==="Enter")&&(i.style.display="none",e.remove())}),i.addEventListener("click",t=>{i.style.display="none",e.remove()})}export{n as a};
