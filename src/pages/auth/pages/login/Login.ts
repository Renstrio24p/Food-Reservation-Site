import './Login.css'

export default function Login(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
    <div class='login-page'>
       <div class='login-content'>
          <div class='login-left'>
             <h2>Login</h2>
                <form>
                  <div class='inputs'>
                    <label for='user' id='user'>Username</label>
                    <input type='text' />
                  </div>
                  <div class='inputs'>
                    <label for='pass' id='password'>Password</label>
                    <input type='password' />
                  </div>
                  <button>Log in</button>
                  <pre>This will be finish later :></pre>
                </form>
          </div>
          <div class='login-right'>
             <h2>Register</h2>
          </div>
       </div>
    </div>
  `);

   const navChange = document.querySelector('nav') as HTMLDivElement
   navChange.classList.add('text-white')

}