import{c as e}from"./chunk-TFW3BQFA.js";e();function s(t){t.innerHTML=`
    <div class='footer-content'>
        <div class='col'>
            <div class='logo-container'>
                <img src='/food.png' alt='logo footer' />
                <div>
                    <h5><span>Pot</span>session <span>in Tuao</span></h5>
                    <p>Cagayan</p>
                </div>
            </div>
            <div class='input-content'>
                <p class='placer'>Your Email</p>
                <input type='email' id='email' name='email'/>
            </div>
            <button>Subscribe</button>
        </div>
        <div class='col'>
            <h5>Hotlines</h5>
            <p><i class='bx bxs-phone'></i> Phone : (02) 8478893</p>
            <p><i class='bx bxs-envelope'></i> Email: food_reservation@hotchicks.com</p>
            <p><i class='bx bxs-store-alt' ></i> Address: 196 Somewhere St. Brgy. NeverEnding, Laguna</p>
        </div>
        <div class='col'>
            <h5>Recent News</h5>
            <p>About Us</p>
            <p>Delivery</p>
            <p>Get In Touch</p>
        </div>
        <div class='col'>
            <h5>Links</h5>
            <p><i class='bx bxl-windows' ></i> Download for Windows</p>
            <p><i class='bx bxl-apple' ></i> Download for MacOs</p>
            <p><i class='bx bxl-android' ></i> Download for Andriod</p>
        </div>
    </div>
    <div class='credits'>
        <p>&copy; Copyright 2024, Food Reservation Allrights Reserved &trade;</p>
    </div>
  `;let i=document.querySelector(".placer"),o=document.querySelector("#email");o.addEventListener("focus",()=>{i.classList.add("active")}),o.addEventListener("blur",()=>{o.value?i.classList.add("active"):i.classList.remove("active")})}export{s as a};
