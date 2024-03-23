import './index.css'

export default function Login(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
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
  `);

   const navChange = document.querySelector('nav') as HTMLDivElement
   navChange.classList.add('text-white')

   const inputFields = DOM.querySelectorAll('.input-container input') as NodeListOf<HTMLInputElement>;
    const inputLabels = DOM.querySelectorAll('.input-container label') as NodeListOf<HTMLLabelElement>;

    inputFields.forEach((input, index) => {
        input.addEventListener('focus', () => {
            inputLabels[index].classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                inputLabels[index].classList.remove('active');
            }
        });
    });

}