import{c as n}from"./chunk-75BM2CW5.js";n();function a(e){e.innerHTML=`
    <div class='login-page'>
       <div class='login-container'>
           <div class='login-left'>
              <img src='/chixsilog.jpg' alt='login image' />
           </div>
           <div class='login-right'>
                <div class='login-logo'>
                    <img class='food' src='/food.png' alt='logo' />
                </div>
                <h1>Login</h1>
                <form>
                    <div class='input-container'>
                        <label class='name-placer'> <i class='bx bxs-user-detail' ></i> Name</label>
                        <div>
                            <input type='text' />
                        </div>
                    </div>
                    <div class='input-container'>
                        <label class='email-placer'> <i class='bx bx-envelope'></i> Email</label>
                        <div>
                            <input type='email' />
                        </div>
                    </div>
                    <div class='input-container'>
                        <label class='password-placer'> <i class='bx bx-key'></i> Password</label>
                        <div>
                            <input type='password' />
                        </div>
                    </div>
                    <div class='forgot-container'>
                      <div class='remember-me'>
                        <input type='checkbox' />
                        <label>Remember me</label>
                      </div>
                      <div class='forgot-password'>
                        <a href='#'>Forgot Password?</a>
                      </div>
                    </div>
                    <button>Login</button>
                    <span class='signup'>Don't have an account? <a href='#'>Sign Up</a></span>
                </form>
           </div>
    </div>
  `,document.querySelector("nav").classList.add("text-white");let l=e.querySelectorAll(".input-container input"),t=e.querySelectorAll(".input-container label");l.forEach((i,o)=>{i.addEventListener("focus",()=>{t[o].classList.add("active")}),i.addEventListener("blur",()=>{i.value===""&&t[o].classList.remove("active")})})}export{a};
