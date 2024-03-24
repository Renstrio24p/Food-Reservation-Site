import{d as e}from"./chunk-NKHZ5Y4Q.js";e();function t(i,o){i.innerHTML=`
        <div class='modal-storage'>
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class='modal-image'>
                    <img src='${o.image}' alt='food image' />
                </div>
                <div>
                    <h1>${o.title}</h1>
                    <p>Description: ${o.description}</p>
                    <p>Price: ${o.price}</p>
                </div>
            </div>
        </div>
    `,i.querySelector(".close").addEventListener("click",()=>{i.style.display="none",i.remove()})}export{t as a};
