import{d as i}from"./chunk-WEUAS4CC.js";i();function l(o,e){e.innerHTML=`
        <div class='auth'>
            <h1>Verifying<span id="dots"></span></h1>
        </div>
    `;let n=document.getElementById("dots");if(n){let t=1;setInterval(()=>{n.textContent=".".repeat(t),t=t%3+1},500)}setTimeout(()=>{localStorage.getItem("auth-token")?o(e):window.location.href="/login"},3e3)}export{l as a};
